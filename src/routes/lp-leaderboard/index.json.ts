import type { RequestHandler } from "@sveltejs/kit"
import { ignoredAccounts, weeklyReward, lpCutoff, snapshots, latestSnapshotDate, nextSnapshotDate } from './lpSnapshot.json'

const LP_HOLDER_API = `https://indexer.algoexplorerapi.io/stats/v2/accounts/rich-list?limit=100&asset-id=552661375`
const LP_POOL_API = `https://mainnet.analytics.tinyman.org/api/v1/pools/PMSLU3PDSQ4RTD7PB3MYXWNQL6INRLBYMNX7JTUWT2QXFKAI66DQQDRNVQ`
const LP_VALIDATE_API = (time: string) => `https://algoindexer.algoexplorerapi.io/v2/accounts/PMSLU3PDSQ4RTD7PB3MYXWNQL6INRLBYMNX7JTUWT2QXFKAI66DQQDRNVQ/transactions?tx-type=axfer&after-time=${time}&asset-id=552661375&limit=5000`

export const get: RequestHandler = async ({}) => {
	const lpHoldersRequest = await fetch(LP_HOLDER_API)
	const lpHoldersResponse = await lpHoldersRequest.json()

	const lpPoolRequest = await fetch(LP_POOL_API)
	const lpPoolResponse = await lpPoolRequest.json()
	
	const lpValidateAPIs = await fetch(LP_VALIDATE_API(new Date(latestSnapshotDate).toISOString()))
	const lpValidateReponse = await lpValidateAPIs.json()

	const lpTokensIssued = lpPoolResponse.current_issued_liquidity_assets
	const dpandaTokens = lpPoolResponse.current_asset_1_reserves
	const algoTokens = lpPoolResponse.current_asset_2_reserves

	const dpandaFactor = dpandaTokens / lpTokensIssued
	const algoFactor = algoTokens / lpTokensIssued
	
	let invalidAccounts = []
	let newAccounts = []
	let accounts = lpHoldersResponse.accounts.filter(a => ignoredAccounts.indexOf(a.address) === -1)
	const latestSnapshot = snapshots[snapshots.length - 1]
	const latestWeek = snapshots.length

	const shadowWallets = {}
	const isUnder = {}
	
	lpValidateReponse.transactions.reverse().map(t => {
		const isSent = t.sender === 'PMSLU3PDSQ4RTD7PB3MYXWNQL6INRLBYMNX7JTUWT2QXFKAI66DQQDRNVQ'
		const wallet = isSent ? t['asset-transfer-transaction'].receiver : t.sender

		if (typeof (shadowWallets[wallet]) === 'undefined') shadowWallets[wallet] = 0
		
		if (isSent) {
			shadowWallets[wallet] += t['asset-transfer-transaction'].amount
		} else {
			shadowWallets[wallet] -= t['asset-transfer-transaction'].amount
		}

		if (shadowWallets[wallet] <= 0 && typeof (isUnder[wallet]) === 'undefined') {
			isUnder[wallet] = { wallet, t, time: new Date(t['round-time'] * 1000)}
		}
	})

	let sum: number = 0
	accounts = accounts.map(a => {
		const balance = (Math.round((parseInt(a.balance) / (1000 * 1000) + Number.EPSILON) * 100) / 100)
		const snapshotLp = latestSnapshot.find(lpa => lpa.address === a.address)?.lp || 0
		const isValid = snapshotLp > lpCutoff && balance >= snapshotLp && typeof(isUnder[a.address]) === 'undefined'
		let status = (isValid && typeof(isUnder[a.address]) === 'undefined') ? 
			{ type: 'VAILD', label: 'Eligible', data: null } : 
			{ type: 'INVALID_WITHDRAW', label: 'Not Eligible', data: isUnder[a.address] }
		
		if (isValid) {
			sum += snapshotLp
		}

		if (snapshotLp === 0 && balance > lpCutoff) status = { type: 'INVALID_NEW', label: 'New', data: null }
		else if (balance < lpCutoff && balance > 0) status = { type: 'INVALID', label: 'Not Eligible', data: null } 

		return {
			...a,
			snapshotLp,
			balance,
			isValid,
			status
		}
	})

	newAccounts = accounts.filter(a => ((a.snapshotLp === 0 && a.balance > lpCutoff) && !a.isValid))
	invalidAccounts = accounts.filter(a => a.snapshotLp && !a.isValid)
	invalidAccounts.sort((a, b) => b.snapshotLp - a.snapshotLp)

	accounts = accounts.filter(a => (a.snapshotLp > 0 || a.balance > 0) && a.isValid)
	accounts.sort((a, b) => b.snapshotLp - a.snapshotLp)

	let rank = 0
	accounts = accounts.map((a) => {
		if (a.isValid) {
			rank++
		}

		return {
			...a,
			rank: a.isValid ? rank : 0,
			'%': a.isValid ? (a.snapshotLp / sum) : 0,
			pendingReward: a.isValid ? weeklyReward * (a.snapshotLp / sum) : 0
		}
	})

	return { body: {
		week: latestWeek,
		latestSnapshotDate,
		nextSnapshotDate,
		accounts,
		invalidAccounts,
		newAccounts,
		sum,
		totalLP: Math.round(sum * dpandaFactor), 
		totalReward: 2000000,
		dpandaFactor, 
		algoFactor } }
};
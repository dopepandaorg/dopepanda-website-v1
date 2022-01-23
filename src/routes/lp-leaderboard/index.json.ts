import type { RequestHandler } from "@sveltejs/kit"
import { ignoredAccounts, weeklyReward, lpCutoff, snapshots } from './lpSnapshot.json'

const LP_HOLDER_API = `https://indexer.algoexplorerapi.io/stats/v2/accounts/rich-list?limit=100&asset-id=552661375`
const LP_POOL_API = `https://mainnet.analytics.tinyman.org/api/v1/pools/PMSLU3PDSQ4RTD7PB3MYXWNQL6INRLBYMNX7JTUWT2QXFKAI66DQQDRNVQ`

export const get: RequestHandler = async ({}) => {
	const lpHoldersRequest = await fetch(LP_HOLDER_API)
	const lpHoldersResponse = await lpHoldersRequest.json()

	const lpPoolRequest = await fetch(LP_POOL_API)
	const lpPoolResponse = await lpPoolRequest.json()

	const lpTokensIssued = lpPoolResponse.current_issued_liquidity_assets
	const dpandaTokens = lpPoolResponse.current_asset_1_reserves
	const algoTokens = lpPoolResponse.current_asset_2_reserves

	const dpandaFactor = dpandaTokens / lpTokensIssued
	const algoFactor = algoTokens / lpTokensIssued
	
	let accounts = lpHoldersResponse.accounts.filter(a => ignoredAccounts.indexOf(a.address) === -1)
	const latestSnapshot = snapshots[snapshots.length - 1]
	const latestWeek = snapshots.length

	let sum: number = 0
	accounts = accounts.map(a => {
		const balance = (Math.round((parseInt(a.balance) / (1000 * 1000) + Number.EPSILON) * 100) / 100)
		const snapshotLp = latestSnapshot.find(lpa => lpa.address === a.address)?.lp || balance
		const isValid = snapshotLp > lpCutoff && snapshotLp >= balance 
		let status = isValid ? 'Eligible' : 'Not Eligible'
		
		if (isValid) {
			sum += snapshotLp
		}

		if (snapshotLp === 0 && balance > lpCutoff) status = 'New'
		else if (balance < lpCutoff && balance > 0) status = 'Not Eligible'

		return {
			...a,
			snapshotLp,
			balance,
			isValid,
			status
		}
	})

	accounts = accounts.filter(a => a.snapshotLp > 0 || a.balance > 0)
	accounts = accounts.map(a => {
		return {
			...a,
			'%': a.isValid ? (a.snapshotLp / sum) : 0,
			pendingReward: a.isValid ? weeklyReward * (a.snapshotLp / sum) : 0
		}
	})

	accounts.sort((a, b) => b.snapshotLp - a.snapshotLp)

	return { body: {
		week: latestWeek,
		accounts, 
		sum,
		totalLP: Math.round(sum * dpandaFactor), 
		totalReward: 2000000,
		dpandaFactor, 
		algoFactor } }
};
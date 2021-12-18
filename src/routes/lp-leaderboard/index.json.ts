import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({}) => {
	const ignoredAccounts = ['W5FCB4QMIMJBGACPQXCTCT265FPYH2ZXQGVHPKCPHOH7NCXQHIXSHTN4SE', 'M5TWBEMR35KXIQ25R4QW3A5FH6BA7P2QUYUDIIKW3VV2JP3BSRPVZOQFIQ']

	const lpHoldersRequest = await fetch('https://indexer.algoexplorerapi.io/stats/v2/accounts/rich-list?limit=100&asset-id=391387065')
	const lpHoldersResponse = await lpHoldersRequest.json()
	
	let accounts = lpHoldersResponse.accounts.filter(a => ignoredAccounts.indexOf(a.address) === -1)
	let weeklyReward = 2000000

	const lpSnapshot1 = [
		{ address: 'KG3IMAU2WYURUSQ27JM5P3XHRKASFRWY7FWZTVRXUHNWSFWOSCCIAQNE3I', lp: 57832.90 },
		{ address: 'TZZ5JUWDDJIKPXKQV4CCQFVUYIMM7SA22BAIMFGQAJ7HJCZRW3DTJET7SU', lp: 52836.86 },
		{ address: 'R2HPT36QHQUDAKJ2GICQLNDRKQB34RMJRXXUBVSMPMKFHOEU6GZTSJ6KDY', lp: 45149.67 },
		{ address: 'JXS3QGN2QR5C2245ULTM6K27BKULX3UULPWM5OHTGZ5JPDIIYPD7FT25NQ', lp: 39294.75 },
		{ address: 'DNSPN5TGRJ3QIXZM5P77KPTYOJDTQP3QPUTMYXF3R7JE74LDM4XOOG7D2I', lp: 24687.13 },
		{ address: 'WPHTZTXYEJA3LTEZHIBBK7ZGOQAUCM2ZX4KWW3KTHCK4C733OO2G4GOKHM', lp: 20346.80 },
		{ address: 'FQJJWF6HFEDGQWZI3OPDWVKAUJT4R62LTOZSNHOZ3OLGYOURSSOXSAPOKM', lp: 11867.76 },
		{ address: 'VWDWZYRLVVH7GM57LHWYYIMSZLTWYNXKICZ6VOMKWOJM6BSOB6YQMS5N5M', lp: 9274.94 },
		{ address: 'BYWF63NV66HMKPNG4QXLUFMPLC7JPICVWU436UGZND4GZY6NVHLPQEVNFI', lp: 9222.38 },
		{ address: 'JY5N4T4F4JG3MC4VXMMWVVCTXYHU3HRU6UAQW5UWK2YFLM2G6HI7YP74UY', lp: 9094.86 },
		{ address: 'LHSISWWX3ZYUIFLBUMOSK2WX2W4IJCMOEVRC7VAXOP6NET4A47CWVEPPOI', lp: 4541.09 },
		{ address: 'FVOOKZB5ATLKJ6XNEYICTLLKJ7TGEZUQJ424NXZQ3IB257L7BX2E7UYDTI', lp: 4503.14 },
		{ address: 'BS3AF5G7LACQ53L35HWMCZPGNTIQG2VVUVCGYU4UGKM7UEOOGXEXAZ2DLM', lp: 4006.93 },
		{ address: 'E5KWCGPO3XDZHNOZC5DVCYQHF73HXZFLN652JVI457W53SJGBIHG6TD4LU', lp: 3756.10 },
		{ address: 'UXCUQ7GEK7LYB7KRFQJERH4FBDYUH2WTVSKANA22TEH5G7FRNDUOPEHZ3U', lp: 3632.33 },
		{ address: 'NQS3SITZZT3LC6PFHOVMWZDICCYVNYYE7I6SUOIGAB2TSDRJ2G5NW46W7A', lp: 1917.29 },
		{ address: 'L2LBVZNMXIICQC3BAHTHRKSBFCWB43KEFHJQQ45ON6OHYEJORBWUKJFM64', lp: 1378.03 },
		{ address: '73WFVQ45UQZBS7BH6MJAWDOXQOZRW6PA4LM7Q3PRKZX3BHAPIQEWKU6UAY', lp: 795.67 },
		{ address: 'NNQQODFGN7ABPO4F5757PCQFIF556OQTHOJCMSZB3EDLFVAHKMT6BSUIG4', lp: 31.11 }
	]

	let sum: number = 0
	accounts = accounts.map(a => {
		const balance = (Math.round((parseInt(a.balance) / (1000 * 1000) + Number.EPSILON) * 100) / 100)
		const snapshotLp = lpSnapshot1.find(lpa => lpa.address === a.address)?.lp || 0
		const isValid = snapshotLp > 1000 && balance >= snapshotLp
		let status = isValid ? 'Eligible' : 'Not Eligible'
		
		if (isValid) {
			sum += snapshotLp
		}

		if (snapshotLp === 0 && balance > 1000 && balance > snapshotLp) status = 'New'
		else if (balance < 1000 && balance > 0) status = 'Not Eligible'

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

	return {
		body: { accounts, sum } };
};
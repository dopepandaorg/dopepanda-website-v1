import type { RequestHandler } from '@sveltejs/kit';

const WALLET = 'M5TWBEMR35KXIQ25R4QW3A5FH6BA7P2QUYUDIIKW3VV2JP3BSRPVZOQFIQ';
const WALLET_TXS_API = `https://algoindexer.algoexplorerapi.io/v2/accounts/${WALLET}`;
const TOTAL_SUPPLY = 1000000000;
const ASSET_ID = 391379500;

export const get: RequestHandler = async ({}) => {
	const walletRequest = await fetch(WALLET_TXS_API);
	const walletResponse = await walletRequest.json();

	let totalSupply = TOTAL_SUPPLY;
	let reserveSupply = 0;

	if (walletResponse.account) {
		const foundAsset = walletResponse.account.assets.find((a) => a['asset-id'] === ASSET_ID);

		if (foundAsset) {
			reserveSupply = foundAsset.amount / (1000 * 1000);
		}
	}

	return {
		body: {
			totalSupply,
			reserveSupply,
			circulatingSupply: totalSupply - reserveSupply
		}
	};
};

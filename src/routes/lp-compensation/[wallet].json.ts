import type { RequestHandler } from "@sveltejs/kit"
import { withdrawals } from './lpCompensation.json'

const WALLET = 'NRHXRWFE5RXCI5WXDBV4TH4RNH6BGLX5N2BE4OZXOIBQDPJR5JFYRYPMB4'
const WALLET_TXS_API = `https://algoindexer.algoexplorerapi.io/v2/accounts/${WALLET}/transactions`
const LP_PRICE = 0.00013
const MULTIPLIER = 1000 * 1000
const COMPENSATION_CHECK = (price: number, asset2: number, asset1: number) => (price < LP_PRICE ? ((asset2 - (asset1 / LP_PRICE)) / 2) : 0)

export const get: RequestHandler = async ({ params }) => {
    const { wallet } = params
    
    const walletRequest = await fetch(WALLET_TXS_API)
    const walletResponse = await walletRequest.json()

    let foundTxsTotal = 0
    let paidTxsTotal = 0
    if (walletResponse.transactions) {
        walletResponse.transactions.map((t: any) => {
            if (t.sender === wallet && t['asset-transfer-transaction'] && t['asset-transfer-transaction']['asset-id'] === 391379500) {
                foundTxsTotal += t['asset-transfer-transaction'].amount / MULTIPLIER
            }

            if (t.sender === WALLET && t['tx-type'] === 'pay' && t['payment-transaction'] && t['payment-transaction'].receiver === wallet) {
                paidTxsTotal += t['payment-transaction'].amount / MULTIPLIER
            }
        })
    }
    
    let totalExcess = 0
    let totalCompensation = 0

    let foundWithdrawals = withdrawals.filter(w => w.wallet === wallet)
    foundWithdrawals = foundWithdrawals.map(fw => {
        const excess = COMPENSATION_CHECK(fw.avgPrice, fw.dpandaSent, fw.algoSent) / MULTIPLIER
        const compensation = excess * LP_PRICE

        totalExcess += excess
        totalCompensation += compensation

        return {
            ...fw,
            algoSent: fw.algoSent / MULTIPLIER,
            dpandaSent: fw.dpandaSent / MULTIPLIER,
            excess, compensation
        }
    })

    return {
        body: {
            wallet,
            isEligible: totalCompensation > 0,
            withdrawals: foundWithdrawals,
            totalExcess,
            totalCompensation,
            totalPaid: paidTxsTotal,
            totalSent: foundTxsTotal,
            lpPrice: LP_PRICE,
            multiplier: MULTIPLIER
        }
    }
};
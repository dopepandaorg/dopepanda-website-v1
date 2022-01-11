<script lang="ts">
    import CopyClipboard from '../CopyClipboard.svelte'
import Spinner from '../Spinner.svelte'
    import WithdrawalsTable from './WithdrawalsTable.svelte'

    let wallet: string = ''
	let isLoading: boolean = false
    let walletResponse: any

    const IS_VALID_ADDRESS = (address: string) => !!address.match(/^[a-zA-Z1-9]{58}$/)

    const loadWallet = () => {
        if (!!wallet && IS_VALID_ADDRESS(wallet)) {
            isLoading = true
            wallet = wallet.trim()

            fetch(`lp-compensation/${wallet}.json`)
                .then(response => response.json())
                .then(body => walletResponse = body)
                .catch(error => console.log('error', error))
                .finally(() => isLoading = false)
        }
    }
</script>

<div class="check-form__wrap">
    <div class="check-form__inner">
        <div class="check-form">
            <div class="title-wrap">
                <img src="/icons/calculator.svg" alt="Calculate">
                <h3>Calculate your compensation</h3>
            </div>
    
            <fieldset>
                <label for="wallet">Wallet Address</label>
                <div>
                    <input type="text" placeholder="Enter your wallet address" bind:value={wallet}/>
                    <button on:click={loadWallet} disabled={!IS_VALID_ADDRESS(wallet)}>Check</button>
                </div>
            </fieldset>
    
            <div class="check-form__notice">
                We are compensating LP Holders at a value of 1 DPANDA = 0.00013 ALGO
                <br/>
                <small>(This is the price at which DPANDA-ALGO Official LP was removed)</small>
            </div>
        </div>

        {#if isLoading}
            <Spinner/>
        {/if}

        {#if !isLoading && walletResponse }
            <div class="check-status">
                <div class="title-wrap">
                    {#if walletResponse.isEligible}
                        <img src="/icons/check.svg" alt="Check">
                        <h4>You're Eligible</h4>
                    {:else}
                        <h4>You're Not Eligible</h4>
                    {/if}
                </div>

                {#if walletResponse.withdrawals.length > 0}
                    <WithdrawalsTable withdrawals={walletResponse.withdrawals}/>
                {/if}
            </div>

            {#if walletResponse.isEligible}
                <div class="check-claim">
                    <div class="title-wrap">
                        <img src="/icons/inverse-link.svg" alt="Link">
                        <h4>Claim</h4>
                    </div>

                    <div class="check-claim__inner">
                        <div class="check-claim__action">
                            <div class="check-claim__action__title">Send <span class="gradient">DPANDA</span></div>
                            <div class="check-claim__action__value">
                                <span>{Math.ceil(walletResponse.totalExcess).toLocaleString()}</span>
                                <img class="token-image" src="/apple-icon.png" alt="DPANDA"/>
                            </div>
                            {#if walletResponse.totalSent >= walletResponse.totalExcess}
                                <div class="check-claim__action__status success">
                                    <img src="/icons/check-circle.svg" alt="Success"/>
                                    Transaction Success
                                </div>
                            {:else}
                                <div class="check-claim__action__status pending">
                                    <img src="/icons/pending.svg" alt="Pending"/>
                                    Transaction Pending
                                    {#if walletResponse.totalSent > 0}
                                        <br>
                                        ({Math.ceil(walletResponse.totalExcess - walletResponse.totalSent).toLocaleString()} / {Math.ceil(walletResponse.totalExcess).toLocaleString()})
                                    {/if}
                                </div>
                            {/if}
                        </div>

                        <div class="sync">
                            <img src="/icons/sync.svg" alt="Exchange">
                        </div>

                        <div class="check-claim__action">
                            <div class="check-claim__action__title">Receive Algo</div>
                            <div class="check-claim__action__value">
                                <img class="token-image algo" src="/icons/algo-dark.svg" alt="Algo"/>
                                <span>{(Math.ceil(walletResponse.totalCompensation * 100) / 100).toLocaleString()}</span>
                            </div>

                            {#if walletResponse.totalPaid >= walletResponse.totalCompensation}
                                <div class="check-claim__action__status success">
                                    <img src="/icons/check-circle.svg" alt="Success"/>
                                    Transaction Success
                                </div>
                            {:else}
                                <div class="check-claim__action__status pending">
                                    <img src="/icons/pending.svg" alt="Pending"/>
                                    Transaction Pending
                                </div>
                            {/if}
                        </div>
                    </div>

                    {#if walletResponse.totalPaid < walletResponse.totalCompensation}
                        <div class="check-claim__info__wrap">
                            <div class="check-claim__info">
                                <div>
                                    <h4>Next Steps</h4>
                                    <br>
                                    <p>Send your excess DPANDA to the compensation wallet address below and within 24 hours your compensation Algo amount will get deposited into your wallet.</p>
                                    <p>
                                        If you've sent more or less than the amount, we will refund it within 24 hours. If you've sent it from a different address than the one entered above, we will refund it within 24 hours.
                                    </p>
                                    <br>
                                    <h5>Compensation Wallet</h5>
                                    <p>
                                        <CopyClipboard
                                            let:copy
                                            text="NRHXRWFE5RXCI5WXDBV4TH4RNH6BGLX5N2BE4OZXOIBQDPJR5JFYRYPMB4">
                                            <code>NRHXRWFE5RXCI5WXDBV4TH4RNH6BGLX5N2BE4OZXOIBQDPJR5JFYRYPMB4</code>
                                            <button class="copy" on:click={copy}>Click to copy</button>
                                        </CopyClipboard>
                                    </p>
                                    <img src="/images/compensation-qr.png" alt="QR Code">
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
</div>

<style lang="scss">
    .title-wrap {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;
        
        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: center;
        }

        img {
            float: left;
            margin-bottom: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
            
            @media screen and (min-width: 768px) {
                position: relative;
                top: 2px;
                margin-right: 0.625rem;
                margin-bottom: 0;
            }
        }
    }

    .check-form__wrap {
        padding: 2px;
        border-radius: 10px;
        background: linear-gradient(109.08deg, #FD9D5D 0%, #FD2CA0 49.53%, #3397FF 104.51%);
        box-shadow: 6px 13px 20px rgba(7, 7, 7, 0.1);
    }

    .check-form__notice {
        color: #fff;
        padding: 1rem;
        background: linear-gradient(109.08deg, #FD9D5D 0%, #FD2CA0 49.53%, #3397FF 104.51%);
        border-radius: 10px;
        margin-top: 2rem;
        
        @media screen and (min-width: 768px) {
            font-size: 1.25rem;
            padding: 1.25rem;
        }
    }

    .check-form__inner {
        border-radius: 8px;
        padding: 1rem;
        background-color: #fff;
        
        @media screen and (min-width: 768px) {
            padding: 3.125rem;
        }
    }

    .check-form {
        fieldset {
            display: flex;
            flex-direction: column;
            padding: 0;
            border: 0;

            label {
                font-size: 1.125rem;
                margin-bottom: 0.5rem;
            }

            input {
                padding: 1.5rem 1.5rem;
                background-color: #eee;
                border-radius: 8px;
                border: 0;
            }

            button {
                font-size: 1.125rem;
                font-weight: 500;
                padding: 1.125rem 2rem;
                color: #fff;
                background: linear-gradient(178.57deg, #e1aed0 0%, #fd2ca0 100%);
                border: 4px solid rgba(255, 255, 255, 0.85);
                background-size: 200% 100%;
                background-position: 200% 100%;
                transition: all 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    background-position: 100% 100%;
                }

                &[disabled] {
                    opacity: 0.625;
                    pointer-events: none;
                    background: grey;

                    &:hover {
                        background: grey;
                    }
                }
            }

            > div {
                display: flex;
                flex-direction: column;
                
                @media screen and (min-width: 768px) {
                    align-items: center;
                    flex-direction: row;            
                }

                input {
                    flex: 1;
                }

                button {
                    width: 100%;
                    margin-top: 1rem;
                    
                    @media screen and (min-width: 768px) {
                        margin-top: 0;
                        margin-left: 2rem;
                        width: auto;
                        height: 100%;
                    }
                }
            }
        }
    }

    .check-claim {
        &__inner {
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

        }

        &__action {
            &__title {
                font-family: 'HK_Grotesk', 'sans-serif';
                font-size: 1.125rem;
                font-weight: bold;
                text-transform: uppercase;

                @media screen and (min-width: 768px) {
                    font-size: 1.875rem;
                }
            }

            &__value {
                display: flex;
                align-items: center;
                font-family: 'HK_Grotesk', 'sans-serif';
                font-size: 3rem;
                font-weight: normal;
                
                @media screen and (min-width: 768px) {
                    font-size: 5rem;
                }

                img {
                    float: left;
                    width: 2rem;
                    height: 2rem;
                    margin-left: 1rem;
                    
                    &:first-child {
                        margin-right: 1rem;
                        margin-left: 0;
                    }

                    &.algo {
                        padding: 0.1375rem;
                    }
                    
                    @media screen and (min-width: 768px) {
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }

            &__status {
                font-size: 1.125rem;
                display: flex;
                align-items: center;
                margin-top: 0.5rem;

                @media screen and (min-width: 768px) {
                    font-size: 1.875rem;
                    margin-top: 1rem;
                }

                &.pending {
                    color: #FB883B;
                }

                &.success {
                    color: #00A99D;
                }

                img {
                    margin-right: 0.5rem;
                }
            }   
        }

        .sync {
            margin: 2rem 0;
        }

        &__info__wrap {
            background: linear-gradient(109.08deg, #FD9D5D 0%, #FD2CA0 49.53%, #3397FF 104.51%);
            padding: 1px;
            border-radius: 10px;
            margin-top: 4rem;
        }

        &__info {
            font-size: 1rem;
            line-height: 1.6;
            background-color: #fff;
            border-radius: 8px;
            padding: 1rem;

            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                font-size: 1.25rem;
                padding: 1.5rem;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            h4 {
                opacity: 0.35;
            }

            p {
                max-width: 1000px;
            }

            .copy {
                font-size: 1rem;
                border: 0;
                display: block;
                margin-top: 0.5rem;
                background: none;
                text-decoration: underline;
                transition: opacity 0.3s;

                &:hover {
                    cursor: pointer;
                }

                &:focus, &:active {
                    opacity: 0.5;
                }
            }

            code {
                font-size: 0.875rem;
                display: inline-block;
                background-color: #eee;
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 0.5rem;

                overflow: hidden;
                max-width: 100%;
                word-break: break-all;
            }

            img {
                width: 200px;
                height: auto;
            }
        }

        &__send {

        }

        &__receive {

        }
    }

    .check-status, .check-claim {
        margin-top: 3.125rem;
        border-top: 1px solid #000;
        padding-top: 3.125rem;
    }
</style>
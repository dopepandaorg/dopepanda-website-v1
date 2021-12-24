<script lang="ts">
    export let isExclusive = false
    export let name: string
    export let image: string
    export let price: number
    export let total: number
    export let description: string
    export let managerId: string
    export let classes = ''

    let qty = total
    let isLoading = true
    let assetId: string

    fetch(`https://algoindexer.algoexplorerapi.io/v2/accounts/${managerId}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.account && data.account.assets && data.account.assets.length > 0) {
                const asset = data.account.assets[0]
                qty = asset.amount
                assetId = asset['asset-id']
            } else {
                qty = 0
            }
        })
        .finally(() => isLoading = false)


    const navigateAb2Gallery = (assetId: string) => {
        window.open(`https://ab2.gallery/asset/${assetId}`, '_blank');
    }
</script>

<div class="nft {classes}">
    {#if isExclusive}
        <i><img src="/images/exclusive-badge.svg" alt="Exclusive"/></i>
    {/if}
    <div class="nft__image"><img src="{image}" alt="{name}" /></div>
    <h4>{name}</h4>
    <p>
        {@html description}
    </p>
    <div class="nft__meta">
        <div class="nft__meta__price">{price} <img src="/icons/algo.svg" alt="Algo" /></div>
        <div class="nft__meta_qty">{ isLoading ? '...' : qty} / {total}</div>
    </div>
    {#if !isLoading}
        {#if qty > 0}
            <button on:click={() => navigateAb2Gallery(assetId)}>Get it now</button>
        {:else}
            <button disabled>Sold Out</button>
            <span class="soldout">
                We're sold out but checkout
                <a href="https://ab2.gallery/address/GDJEJXVWYUINO7XTCR3P4HKV645H56NQOEISFHUQZVIAHWBSBBMFAR3MHY" target="_blank">
                    secondary listings on AB2 Gallery
                </a>
            </span>
        {/if}
    {:else}
        <button disabled>Loading ...</button>
    {/if}
</div>


<style lang="scss">
    .nft {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 4px;
        color: #fff;
        background: radial-gradient(
            119.58% 50% at 50% 50%,
            #000000 0%,
            #3c112d 0.01%,
            #240b1c 73.44%,
            #000000 100%
        );

        &.christmas {
            background: #34A65F;
        }
        

        i {
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(20%,-20%);
            
            @media screen and (min-width: 767px) {
                transform: translate(40%, -40%);
            }

            img {
                width: 100px;
                height: 100px;
            }
        }

        .nft__image {
            img {
                max-width: 100%;
                border-radius: 4px;
                border: 2px solid #e1aed0;
            }
        }

        h4 {
            margin-top: 1rem;
        }

        p {
            flex: 1;
        }

        a {
            color: #fff;
        }

        button {
            margin-top: 1rem;
            font-size: 1.125rem;
            font-weight: 500;
            padding: 1rem;
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

        .nft__meta {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;

            .nft__meta__price {
                display: flex;
                align-items: center;

                img {
                    width: 1rem;
                    height: 1rem;
                    margin-left: 0.25rem;
                }
            }
        }

        .soldout {
            margin-top: 0.5rem;
        }
    }
</style>

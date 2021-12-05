<script lang="ts">
    const navigateAb2Gallery = () => {
        window.open('https://ab2.gallery/asset/416240097', '_blank')
    }
</script>

<section id="nft" class="section section--vertical section--nft">
    <div class="section__inner">
        <div class="section__content">
            <h2><span class="gradient">Dope NFTs</span></h2>
        </div>

        <div class="section__nfts">
            <div class="nft">
                <div class="nft__image"><img src="/images/nft-smoker-panda.png" alt="Smoker Panda"></div>
                <h4>Smoker Panda</h4>
                <p>Lights up a bamboo blunt to relax after a long day of doing absolutely nothing.</p>
                <button disabled>Sold Out</button>
            </div>
            <div class="nft">
                <div class="nft__image"><img src="/images/nft-kind-panda.png" alt="Smoker Panda"></div>
                <h4>Kind Panda</h4>
                <p>The kindest of all pandas! All proceeds for my sale will be <a href="https://gifts.worldwildlife.org/gift-center/onlinepremiums/onlinecertificate.aspx?bvin=fce2c1fa-8fe4-4302-8b99-850d31f337db" target="_blank" rel="nofollow">donated to charity</a>.</p>
                <button disabled>Sold Out</button>
            </div>
            <div class="nft">
                <div class="nft__image"><img src="/images/nft-happy-panda.png" alt="Smoker Panda"></div>
                <h4>Happy Panda</h4>
                <p>He is satisfied with his life and enjoys every moment.</p>
                <button disabled>Sold Out</button>
            </div>
            <div class="nft">
                <div class="nft__image"><img src="/images/nft-basic-panda.png" alt="Smoker Panda"></div>
                <h4>Basic Panda</h4>
                <p>This is just a 'basic' dope panda. Weighs 45 kilo and eats consistently for 12-14 hours a day</p>
                <button on:click={navigateAb2Gallery}>Get it now</button>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .section__inner, .section__nfts {
        width: 100%;
    }

    .section__nfts {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3vw;
        gap: 3vw;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    
    .nft {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 4px;
        color: #fff;
        background: radial-gradient(119.58% 50% at 50% 50%, #000000 0%, #3C112D 0.01%, #240B1C 73.44%, #000000 100%);

        img {
            max-width: 100%;
            border-radius: 4px;
            border: 2px solid #E1AED0;
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
            background: linear-gradient(178.57deg, #E1AED0 0%, #FD2CA0 100%);
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
    }
</style>
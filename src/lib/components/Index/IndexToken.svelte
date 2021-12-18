<script>
    const navigateTokenomics = () => {
        window.open('https://docs.google.com/spreadsheets/d/1SRXhcTESYQQjfwbKi1c9IbqkbpiZGkQ09EO8jNN4YIA/edit?usp=sharing', '_blank')
    }

    const navigateTinyman = () => {
        window.open('https://app.tinyman.org/#/swap?asset_in=0&asset_out=391379500', '_blank')
    }
</script>

<section id="token" class="section section--accent section--token">
    <div class="section__inner">
        <div class="section__content sticky">
            <h2>Tokenomics</h2>
            <p>DopePanda's tokenomics model is crafted to put our community first. We're committed to a fair launch and have allocated ~50% of DPANDA's total supply towards liquidity, community giveaways, and participation rewards.</p>

            <div class="section__ctas">
                <button on:click={navigateTokenomics}>View Detailed Tokenomics</button>
                <button on:click={navigateTinyman}>Buy on Tinyman</button>
            </div>
        </div>
        
        <div class="section__graphic">
            <img src="/images/tokenomics-chart.svg" alt="tokenomics-chart">
        </div>
    </div>
</section>

<style lang="scss">
    .section__graphic {
        padding: 2vw;
        margin-top: 2rem;

        @media screen and (min-width: 768px) {
            margin-top: 0;
        }
    }

    .section__ctas {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 768px) {
            float: left;
        }
    }

    button {
        margin-top: 1rem;
        font-size: 1rem;
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

        @media screen and (min-width: 768px) {
            font-size: 1.125rem;
        }
    }
</style>
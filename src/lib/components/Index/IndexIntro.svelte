<script lang="ts">
    import { goto } from "$app/navigation"

    const navigateRoadmap = () => {
        document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })
    }
    const navigateCommunity = () => {
        document.getElementById('community').scrollIntoView({ behavior: 'smooth' })
    }
    const navigateNFT = () => {
        document.getElementById('nft').scrollIntoView({ behavior: 'smooth' })
    }
    const navigateLeaderboard = () => {
        window.location.href = '/lp-leaderboard'
    }
</script>

<section id="intro" class="section section--full section--vertical section--intro">
    <h1 class="section__title">DOPEPANDA</h1>

    <div class="section__inner">
        <div class="section__content__wrap">
            <div class="section__content">
                <img class="mascot-face" src="/images/mascot-face.png" alt="Mascot Face"/>
    
                <small class="powered-by">
                    <img class="powered-by__logo" src="/images/logo-algorand.png" alt="algorand-logo"/>
                    Powered by
                </small>
                <h2>Building an ecosystem <span class="gradient">for next-gen creators</span></h2>
                <p>DopePanda aims to bridge DeFi and Crowdfunding with the Creator Economy. Leveraging the power of <strong>Algorand's ASA</strong> and our <strong>unique approach to subscriptions</strong>; creators can seamlessly share, monetize content and engage with their audience.</p>
            </div>
            <div class="section__cta">
                <button on:click={navigateLeaderboard}>LP Leaderboard <img src="/images/badge-new.svg" alt="New"></button>
                <button on:click={navigateRoadmap}>View our Roadmap</button>
                <button on:click={navigateCommunity}>Join our Community</button>
            </div>
        </div>
    </div>

    <div class="section__nft">
        <img class="section__nft__mascot" src="/images/panda-nft.png" alt="Panda NFT"/>
        <div class="section__nft__content">
            <h4>Panda NFTs ?</h4>
            <button on:click={navigateNFT}>Get them now</button>
        </div>
    </div>
</section>

<style lang="scss">
    .section {
        align-items: center;
    }

    .section__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        max-width: none;

        background: linear-gradient(109.08deg, #FD9D5D 0%, #FD2CA0 49.53%, #3397FF 104.51%);
        mix-blend-mode: normal;
        opacity: 0.85;
    }

    .section__title {
        font-size: 10vw;
        line-height: 1.2;
        font-weight: bold;
        text-align: center;

        margin: 0;

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        @media screen and (min-width: 992px) {
            font-size: 10vw;
            line-height: 1;
        }

        @media screen and (min-width: 1200px) {
            font-size: 9vw;
        }

        @media screen and (min-width: 1500px) {
            font-size: 140px;
        }
    }

    .section__content__wrap {
        flex: 0;
        margin: 5vw 6vw;

        @media screen and (min-width: 768px) {
            max-width: 1000px;
            margin: 5vw 12vw;
        }
    }

    .section__content {
        position: relative;
        top: 0;
        background-color: #fff;
        padding: 5vw;

        @media screen and (min-width: 768px) {
            padding: 4vw 5vw 4vw;
        }

        @media screen and (min-width: 1500px) {
            padding: 4rem 5rem;
        }

        h2 {
            line-height: 1;
            
            @media screen and (max-width: 767px) {
                font-size: 1.625rem;
            }
        }

        p {
            @media screen and (max-width: 767px) {
                font-size: 1rem;
            }
        }
    }

    .section__cta {
        display: flex;
        flex-direction: column;
        position: relative;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            margin-top: 1vw;
            gap: 1vw;
        }

        button {
            position: relative;
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: 500;
            flex: 1;
            padding: 0.875rem;
            color: #fff;
            background: linear-gradient(178.57deg, #E1AED0 0%, #FD2CA0 100%);
            border: 6px solid rgba(255, 255, 255, 0.85);
            background-size: 200% 100%;
            background-position: 200% 100%;
            transition: all 0.3s ease-in-out;

            @media screen and (min-width: 768px) {
                font-size: 1.25rem;
                padding: 1rem;
                margin-top: 0;
            }

            &:hover {
                cursor: pointer;
                background-position: 100% 100%;
            }

            img {
                position: absolute;
                width: 3rem;
                height: 3rem;
                right: -1.25rem;
                top: -1.25rem;
            }

            @media screen and (max-width: 767px) {
                &:last-child {
                    display: none;
                }
            }
        }
    }

    .section__nft {
        display: none;
        align-items: center;

        @media screen and (min-width: 768px) {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            transform: translateY(-65%);
        }

        .section__nft__mascot {
            max-width: 15vw;
        }

        .section__nft__content {
            background-color: #fff;
            padding: 1rem;
            border: 4px solid #E7E7E7;

            h4 {
                font-size: 1.25rem;
            }

            button {
                margin-top: 1rem;
                width: 100%;
                min-width: 220px;

                font-weight: 500;
                flex: 1;
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
            }
        }
    }

    .mascot-face {
        position: absolute;
        top: -5vw;
        right: calc(100% - 5vw);
        width: 15vw;
        margin-right: -4vw;
        margin-top: -4vw;

        @media screen and (min-width: 768px) {
            top: 0;
            right: 100%;
        }

        @media screen and (min-width: 1500px) {
            width: 250px;
            margin-right: -4rem;
            margin-top: -4rem;
        }

        transition: transform 0.3s;

        &:hover {
            transform: rotate(12deg);
        }
    }

    .powered-by {
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 2;
        text-transform: uppercase;
        letter-spacing: 0.01rem;

        display: flex;
        flex-direction: column;

        margin-bottom: 1.5rem;

        .powered-by__logo {
            max-width: 100px;
        }
    }
</style>

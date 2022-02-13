<section id="community" class="section section--vertical section--community">
    <div class="section__inner">
        <div class="section__content">
            <h2>Join our Community</h2>
        </div>

        <div class="section__community">
            <div class="section__community__item">
                <a href="https://www.reddit.com/r/dopepanda" target="_blank" rel="nofollow">
                    <div><img src="/icons/reddit.svg" alt="Reddit"></div>
                    <div>
                        <h4>Reddit</h4>
                        <p>Join our Reddit community</p>
                    </div>
                </a>
            </div>
            <div class="section__community__item">
                <a href="https://t.me/joinchat/3cBfw4dMqsAxYzJl" target="_blank" rel="nofollow">
                    <div><img src="/icons/telegram.svg" alt="Telegram"></div>
                    <div>
                        <h4>Telegram</h4>
                        <p>Stay up to date with our announcements</p>
                    </div>
                </a>
            </div>
            <div class="section__community__item">
                <a href="https://discord.gg/KMsyYaQC" target="_blank" rel="nofollow">
                    <div><img src="/icons/discord.svg" alt="Discord"></div>
                    <div>
                        <h4>Discord</h4>
                        <p>Join our Discord community</p>
                    </div>
                </a>
            </div>
            <div class="section__community__item">
                <a href="mailto:team@dopepanda.org" target="_blank" rel="nofollow">
                    <div><img src="/icons/gmail.svg" alt="E-mail"></div>
                    <div>
                        <h4>Send us an email</h4>
                        <p>Ask a question or just say Hi 👋</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .section {
        color: #fff;
        background-color: #111;
    }

    .section__inner {
        width: 100%;
        padding-bottom: 0;
    }

    .section__community {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        &__item {
            
            border: 1px solid rgba(255, 255, 255, 0.75);
            transition: all 0.3s;

            @media screen and (min-width: 992px) {
                font-size: 1.125rem;
            }

            img {
                width: 32px;
                height: 32px;
                float: left;

                @media screen and (min-width: 992px) {
                    width: 56px;
                    height: 56px;
                }
            }

            a {
                display: flex;
                align-items: center;
                padding: 2rem 1.5rem;
                gap: 1.5rem;
                text-decoration: none;
                color: #fff;

                @media screen and (max-width: 767px) {
                    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
                        > div:not(:last-child) {
                            margin-right: 1.5rem;
                        }
                    }
                }
                
                @media screen and (min-width: 992px) {
                    padding: 3rem 4rem;
                    grid-gap: 4rem;
                    gap: 4rem;
                }
            }

            p:last-child {
                margin-bottom: 0;
            }

            &:hover {
                background-color: #333;
            }
        }
    }
</style>
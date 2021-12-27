<script lang="ts">
    import { faq } from './faq.json'
    import AccordionItem from '../AccordionItem.svelte'
</script>

<div class="leaderboard__faq">
    <div class="leaderboard__faq__inner">
        <div>
            <h3>Frequently Asked Questions</h3>

            {#each faq as item, i}
                <AccordionItem {...item} isOpen={i === 0} />
            {/each}
        </div>

        <div>
            <img src="/images/lp-schedule.jpg" alt="schedule"/>
        </div>
    </div>
</div>

<style lang="scss">
	.leaderboard__faq {
		margin-top: 4rem;

        h3 {
            margin-bottom: 2rem;
        }

        .leaderboard__faq__inner {
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                flex-direction: row;
            }

            > div {
                flex: 1;

                &:last-child {
                    @media screen and (min-width: 768px) {
                        padding-left: 2rem;
                    }
                }
            }

            img {
                width: 100%;
                max-width: 600px;
                
                @media screen and (min-width: 768px) {
                    float: right;
                }
            }
        }
	}
</style>
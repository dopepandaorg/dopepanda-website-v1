<script lang="ts">
    export let faq = []
    import AccordionItem from './AccordionItem.svelte'
</script>

<div class="faq">
    <div class="faq__inner">
        <div>
            <h3>Frequently Asked Questions</h3>

            {#each faq as item, i}
                <AccordionItem {...item} isOpen={i === 0} />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
	.faq {
		margin-top: 4rem;
        max-width: 1000px;

        h3 {
            margin-bottom: 2rem;
        }

        .faq__inner {
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                flex-direction: row;
            }

            > div {
                flex: 1;

                &:last-child:not(:first-child) {
                    @media screen and (min-width: 768px) {
                        padding-left: 2rem;
                    }
                }
            }
        }
	}
</style>
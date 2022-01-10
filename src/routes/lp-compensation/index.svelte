<script lang="ts">
    import { faq } from './faq.json'

    import FAQ from '$lib/components/FAQ.svelte'
    import PageHeader from '$lib/components/PageHeader.svelte'
    import CheckForm from '$lib/components/LPCompensation/CheckForm.svelte'
</script>

<svelte:head>
	<title>LP Compensation Portal | DopePanda</title>
</svelte:head>

<PageHeader title="Liquidity Provider's <br/>Compensation Program" backLink="/"/>

<div class="container">
    <CheckForm/>
    <br><br><br><br>
    <FAQ faq={faq}/>
</div>

<style lang="scss">
    .container {
		@media screen and (min-width: 1200px) {
			max-width: 90%;
		}
	}
</style>
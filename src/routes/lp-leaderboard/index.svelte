<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit"

	export const load: Load = async ({ fetch }) => {
		return ({
			props: {
				... await fetch('/lp-leaderboard.json')
					.then(response => response.json())
					.then(body => body)
			}
		})
	}
</script>

<script lang="ts">
	import { faq } from './faq.json'

	import FAQ from '$lib/components/FAQ.svelte'
	import PageHeader from '$lib/components/PageHeader.svelte'
	import Countdown from '$lib/components/Countdown.svelte'
	import LPLeaderboardStats from '$lib/components/LPLeaderboard/LPLeaderboardStats.svelte'
	import LpLeaderboardTable from "$lib/components/LPLeaderboard/LPLeaderboardTable.svelte"
	
	export let accounts: any[]
	export let week: number
	export let totalLP: number
	export let totalReward: number
	export let dpandaFactor: number
</script>

<svelte:head>
	<title>Liquidity Provider's Leaderboard | DopePanda</title>
</svelte:head>

<PageHeader title="Liquidity Provider's <br/>Compensation Program" backLink="/">
	<div class="leaderboard__countdown__wrap">
		<div>
			<strong>Week {week - 1} / 6 </strong> reward distribution on 16:00 UTC, 2022-01-30
		</div>
		<Countdown/>
	</div>
</PageHeader>

<div class="container">	
	<LPLeaderboardStats totalLP={totalLP} totalReward={totalReward}/>
	
	<LpLeaderboardTable week={week} accounts={accounts} dpandaFactor={dpandaFactor}/>

	<FAQ faq={faq}/>
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 90%;
		}
	}

	// .warning {
	// 	font-size: 1.125rem;
	// 	margin-bottom: 2rem;
	// 	color: #fff;
	// 	padding: 1.5rem 1.75rem;
	// 	border-radius: 4px;
	// 	line-height: 1.5;
	// 	background: linear-gradient(180deg, #FF4343 0%, #FF4343 100%);

	// 	img {
	// 		display: block;
	// 		margin-bottom: 1rem;
	// 		width: 3rem;
	// 		height: 3rem;
	// 	}

	// 	@media screen and (min-width: 767px) {
	// 		font-size: 1.25rem;
	// 		margin-bottom: 4rem;
	// 		padding: 1.5rem 2.25rem;
	// 	}
	// }

	.leaderboard__countdown__wrap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
		
		@media screen and (min-width: 767px) {
			align-items: flex-end;
			text-align: right;
			margin-top: 0;
		}

		strong {
			display: block;
			font-size: 1.25rem;
			padding-bottom: 0.5rem;
		}
	}
</style>
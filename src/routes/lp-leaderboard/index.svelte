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
	export let invalidAccounts: any[]
	export let newAccounts: any[]
	export let week: number
	export let totalLP: number
	export let totalReward: number
	export let dpandaFactor: number
</script>

<svelte:head>
	<title>Liquidity Provider's Leaderboard | DopePanda</title>
</svelte:head>

<PageHeader title="Liquidity Provider's <br/>Leaderboard" backLink="/">
	<div class="leaderboard__countdown__wrap">
		<div>
			<strong>Bonus Week!</strong> final reward distribution on 16:00 UTC, 2022-03-06
		</div>
		<Countdown/>
	</div>
</PageHeader>

<div class="container">
	<div class="warning">
		<div>
			<img src="/icons/info.svg" alt="Alert"/>
			<strong>Future of LP Leaderboard Contest</strong>
		</div>
		<br/>
		Our LP leaderboard contest, initially a 4 week initiative to reward our community and LP holders, turned out to be a great success.
		<br/><br/>
		In light of this and our commitment to rewarding LP holders, we have decided to move away from the weekly contest and make our LP rewards permanent!
		<br/><br/>
		In the first week of March 2022, DPANDA / ALGO LP pool staking will be available on AlgoStake.
		<br/><br/>
		As a thank you to our community, we are running a final (bonus) week of LP Leaderboard rewards. Lock your LP by 27th Feb 4pm UTC!  
	</div>


	<LPLeaderboardStats week={week} totalLP={totalLP} totalReward={totalReward}/>
	
	<LpLeaderboardTable week={week} accounts={accounts} invalidAccounts={invalidAccounts} newAccounts={newAccounts} dpandaFactor={dpandaFactor}/>

	<FAQ faq={faq}/>
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 90%;
		}
	}

	.warning {
		font-size: 1.125rem;
		margin-bottom: 2rem;
		color: #fff;
		padding: 1.5rem 1.75rem;
		border-radius: 4px;
		line-height: 1.5;
		background: #7375E1;

		div {
			display: flex;
			align-items: center;
			
			img {
				margin-right: 1rem;
				margin-bottom: 0;
			}
		}

		img {
			display: block;
			margin-bottom: 1rem;
			width: 3rem;
			height: 3rem;
		}

		@media screen and (min-width: 767px) {
			font-size: 1.25rem;
			margin-bottom: 4rem;
			padding: 1.5rem 2.25rem;
		}
	}

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
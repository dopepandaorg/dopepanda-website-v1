<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit"
	import { goto } from '$app/navigation'
	import Countdown from '$lib/components/Countdown.svelte'
	import LPLeaderboardStats from '$lib/components/LPLeaderboard/LPLeaderboardStats.svelte'
	import LpLeaderboardFaq from "$lib/components/LPLeaderboard/LPLeaderboardFAQ.svelte"
	import LpLeaderboardTable from "$lib/components/LPLeaderboard/LPLeaderboardTable.svelte"

	export const load: Load = async ({ fetch }) => {
		return ({
			props: {
				... await fetch('/lp-leaderboard.json')
					.then(response => response.json())
					.then(body => body)
			}
		})
	}
	
	const goBack = () => {
		goto('/')
	}
</script>

<script lang="ts">
	export let accounts: any[]
	export let week: number
	export let totalLP: number
	export let totalReward: number
	export let dpandaFactor: number
</script>

<svelte:head>
	<title>Liquidity Provider's Leaderboard | DopePanda</title>
</svelte:head>

<div class="leaderboard__header__wrap">
	<div class="container">
		<div class="leaderboard__header">
			<div>
				<button class="back" on:click={goBack}>Back</button>

				<h1 class="leaderboard__title">
					Liquidity Provider's <br/>Leaderboard
				</h1>
			</div>

			<div class="leaderboard__countdown__wrap">
				<div>
					<strong>Week {week - 1} / 6 </strong> reward distribution on 16:00 UTC, 2022-01-03
				</div>
				<Countdown/>
			</div>
		</div>
	</div>
</div>

<div class="container">	
	<div class="warning">
		<img src="/icons/alert.svg" alt="Alert"/>
		Due to the recent issues with Tinyman Liquidity Pools, we're following Tinyman team's advice and encouraging our community to remove their liquidity from the DPANDA / ALGO pool on Tinyman.
		<br/><br/>
		We have taken an early LP Snapshot at 10:30 am UTC on Sunday 2nd Jan, 2022. All eligible holders at the time of snapshot will receive their Week 3 LP rewards. 
		<br/><br/>The LP contest will be paused for Week 4 until further notice.
	</div>

	<LPLeaderboardStats totalLP={totalLP} totalReward={totalReward}/>
	
	<LpLeaderboardTable week={week} accounts={accounts} dpandaFactor={dpandaFactor}/>

	<LpLeaderboardFaq />
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
		background: linear-gradient(180deg, #FF4343 0%, #FF4343 100%);

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

	.leaderboard__header__wrap {
		background: linear-gradient(109.08deg, #FD9D5D 0%, #FD2CA0 49.53%, #3397FF 104.51%);
		color: #fff;

		.leaderboard__header {
			display: flex;
			flex-direction: column;
			
			@media screen and (min-width: 767px) {
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
	
			> div{
				flex: 1;
			}
	
			.back {
				padding: 0.75rem 1.75rem;
				border-radius: 10px;
				border: 2px solid #fff;
				color: #fff;
				background-color: transparent;
				margin-bottom: 0.75rem;
				transition: all 0.3s;
	
				&:hover {
					cursor: pointer;
					background-color: #fff;
					color: #444;
				}
			}
		}
	}

	.leaderboard__title {
		font-size: 1.875rem;

		@media screen and (min-width: 767px) {
			font-size: 3rem;
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

	// .leaderboard__weeks {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	margin-bottom: 2rem;

	// 	.leaderboard__week {
	// 		position: relative;
	// 		padding: 1.5rem 1rem 0;
	// 		text-align: center;

	// 		&::before {
	// 			content: '';
	// 			position: absolute;
	// 			top: 0;
	// 			left: 50%;
	// 			width: 1.5rem;
	// 			height: 1.5rem;
	// 			margin-left: -0.75rem;
	// 			background: linear-gradient(109.08deg, rgba(253, 157, 93, 0.25) 0%, rgba(253, 44, 160, 0.25) 49.53%, rgba(51, 151, 255, 0.25) 104.51%), #555555;
	// 			border-radius: 50%;
	// 		}

	// 		&::after {
	// 			content: '';
	// 			position: absolute;
	// 			width: 1000px;
	// 			height: 2px;
	// 			top: 0.75rem;
	// 			left: 50%;
	// 			margin-left: 0.75rem;
	// 			background: linear-gradient(109.08deg, rgba(253, 157, 93, 0.25) 0%, rgba(253, 44, 160, 0.25) 49.53%, rgba(51, 151, 255, 0.25) 104.51%), #555555;
	// 		}

	// 		&:last-child {
	// 			&::after {
	// 				background: #fff;
	// 			}
	// 		}

	// 		span {
	// 			display: flex;
	// 			margin-top: 0.5rem;
	// 		}
	// 	}
	// }
</style>
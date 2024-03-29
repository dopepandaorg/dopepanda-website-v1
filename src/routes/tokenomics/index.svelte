<script>
	import IndexCommunity from '$lib/components/Index/IndexCommunity.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import LiquidityStakingTable from '$lib/components/Tokenomics/LiquidityStakingTable.svelte';
	import TokenDistributionChart from '$lib/components/Tokenomics/TokenDistributionChart.svelte';
	import TokenDistributionTable from '$lib/components/Tokenomics/TokenDistributionTable.svelte';
	import VestingScheduleChart from '$lib/components/Tokenomics/VestingScheduleChart.svelte';
	import { onMount } from 'svelte';

	const distribution = [
		{
			type: 'Team',
			allocated: 100000000,
			distributed: 0,
			category: 'team',
			isVesting: true
		},
		{
			type: 'Marketing & Partnership',
			allocated: 100000000,
			distributed: 20000000,
			category: 'spend',
			isVesting: false
		},
		{
			type: 'Foundation Reserve',
			allocated: 300000000,
			distributed: 0,
			category: 'foundation',
			isVesting: true
		},
		{
			type: 'Tinyman Liquidity Pool',
			allocated: 62500000,
			distributed: 62500000,
			category: 'community',
			isVesting: false
		},
		{
			type: 'Initial Airdrops & Giveaways',
			allocated: 187500000,
			distributed: 156250000,
			category: 'community',
			isVesting: false
		},
		{
			type: 'Liquidity Provider Rewards',
			allocated: 125000000,
			distributed: 71000000,
			category: 'community',
			isVesting: false
		},
		{
			type: 'Platform Participation Rewards',
			allocated: 125000000,
			distributed: 0,
			category: 'community',
			isVesting: false
		}
	];

	let totalSupply = 1000000000;
	let circulatingSupply = 0;
	let reserveSupply = 0;
	let distributedSupply = 0;
	let isLoading = true;

	distribution.map((d) => (distributedSupply += d.distributed));

	const loadTokenData = () => {
		fetch(`tokenomics.json`)
			.then((response) => response.json())
			.then((body) => {
				totalSupply = Math.round(body.totalSupply);
				circulatingSupply = Math.round(body.circulatingSupply);
				reserveSupply = Math.round(body.reserveSupply);
			})
			.catch((error) => console.log('error', error))
			.finally(() => (isLoading = false));
	};

	onMount(() => {
		loadTokenData();
	});
</script>

<PageHeader title="DPANDA <br/>Tokenomics" backLink="/" />

<div class="container">
	<section class="section-overview">
		<ul class="menu">
			<li><a href="#distribution">Distribution</a></li>
			<li><a href="#vesting">Vesting Schedule</a></li>
			<li><a href="#staking">Liquidity Staking</a></li>
		</ul>
	</section>

	<section id="distribution" class="section-distribution">
		<h3>Token Distribution</h3>
		<p>
			DopePanda's tokenomics model is crafted to put our community first. We're committed to a fair
			distribution and have allocated ~50% of DPANDA's total supply towards liquidity, community
			giveaways, and participation rewards.
		</p>

		<div class="distribution-chart">
			<div>
				<TokenDistributionChart />
			</div>
			{#if !isLoading}
				<div class="distribution-chart__values">
					<div class="distribution-chart__value">
						<h4>Total Supply</h4>
						<span>{totalSupply.toLocaleString()}</span>
					</div>
					<div class="distribution-chart__value">
						<h4>Reserve Supply</h4>
						<span>{reserveSupply.toLocaleString()}</span>
					</div>
					<div class="distribution-chart__value">
						<h4>Circulating Supply</h4>
						<span>{circulatingSupply.toLocaleString()}</span>
					</div>
					<div class="distribution-chart__value">
						<h4>Unallocated Reserve</h4>
						<span>{(distributedSupply - circulatingSupply).toLocaleString()}</span>
					</div>
				</div>
			{/if}
		</div>

		<TokenDistributionTable {totalSupply} {distribution} />
	</section>

	<section id="vesting" class="section-vesting">
		<h3>Vesting Schedule</h3>
		<VestingScheduleChart />
	</section>

	<section id="staking" class="section-staking">
		<h3>Liquidity Staking</h3>
		<LiquidityStakingTable />
	</section>
</div>

<IndexCommunity />

<style lang="scss">
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 90%;
		}
	}

	h3 {
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.125rem;
		margin-top: 0;

		max-width: 1000px;

		@media screen and (min-width: 768px) {
			font-size: 1.25rem;
		}
	}

	.menu {
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 0;

		@media screen and (min-width: 768px) {
			flex-direction: row;
		}

		li {
			font-size: 1.25rem;
			margin-bottom: 1rem;

			@media screen and (min-width: 768px) {
				font-size: 1.5rem;
				margin-right: 2rem;
				margin-bottom: 0;
			}
		}

		a {
			color: inherit;
		}
	}

	section {
		margin-bottom: 4rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 8rem;
		}
	}

	.section-distribution {
		.distribution-chart {
			display: flex;
			flex-direction: column-reverse;
			margin-bottom: 3rem;
			margin-top: 3rem;

			@media screen and (min-width: 768px) {
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			> div:last-child {
				@media screen and (min-width: 768px) {
					width: 400px;
				}
			}

			> div:first-child {
				@media screen and (min-width: 768px) {
					flex: 1;
				}
			}
		}

		.distribution-chart__values {
			display: flex;
			flex-direction: column;
		}

		.distribution-chart__value {
			margin-bottom: 3rem;

			h4 {
				font-size: 1.25rem;

				@media screen and (min-width: 768px) {
					font-size: 1.5rem;
				}
			}

			span {
				font-size: 2.5rem;
				font-weight: bold;

				@media screen and (min-width: 768px) {
					font-size: 3rem;
				}
			}
		}
	}
</style>

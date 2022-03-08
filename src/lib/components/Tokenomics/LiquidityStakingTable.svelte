<script lang="ts">
	import { onMount } from 'svelte';

	const DAYS_MULTIPLIER = 1000 * 3600 * 24;
	let apyYieldlyStake = 0;
	let apyYieldlyLPStake = 0;
	let apyAlgoStake = 25;

	let durationYieldly = Math.round(
		(new Date('2022-04-07').getTime() - new Date().getTime()) / DAYS_MULTIPLIER
	);
	let durationAlgoStake = Math.round(
		(new Date('2022-06-01').getTime() - new Date().getTime()) / DAYS_MULTIPLIER
	);
	let durationAlgoStakeLP = Math.round(
		(new Date('2022-12-01').getTime() - new Date().getTime()) / DAYS_MULTIPLIER
	);

	const loadYieldlyAPY = () => {
		fetch('https://app.yieldly.finance/staking/pools/v3/617707129')
			.then((response) => response.json())
			.then((body) => (apyYieldlyStake = body.apy));

		fetch('https://app.yieldly.finance/staking/pools/v3/617728717')
			.then((response) => response.json())
			.then((body) => (apyYieldlyLPStake = body.apy));
	};

	onMount(() => {
		loadYieldlyAPY();
	});
</script>

<table>
	<thead>
		<tr>
			<th>Platform</th>
			<th>Type</th>
			<th>Duration</th>
			<th>Est. Reward</th>
			<th />
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<img src="/icons/yieldly.svg" alt="YLDY" class="token-image" />
				Yieldly
				<span>ASA Staking</span>
			</td>
			<td>
				<div class="flex-row">
					<div class="stake-item">
						<img src="/icons/yieldly.svg" alt="YLDY" class="token-image" />
						<div class="stake-item__value">
							<span>Stake</span>
							<strong>YLDY</strong>
						</div>
					</div>
					→
					<div class="stake-item">
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Earn</span>
							<strong>DPANDA</strong>
						</div>
					</div>
				</div>
			</td>
			<td>{durationYieldly} days</td>
			<td>~{apyYieldlyStake.toFixed(2)}% APY</td>
			<td>
				<a href="https://app.yieldly.finance" target="_blank">Stake Now ↗</a>
			</td>
		</tr>
		<tr>
			<td>
				<img src="/icons/algostake.svg" alt="STKE" class="token-image" />
				AlgoStake
				<span>ASA Staking</span>
			</td>
			<td>
				<div class="flex-row">
					<div class="stake-item">
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Stake</span>
							<strong>DPANDA</strong>
						</div>
					</div>
					→
					<div class="stake-item">
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Earn</span>
							<strong>DPANDA</strong>
						</div>
					</div>
				</div>
			</td>
			<td>{durationAlgoStake} days</td>
			<td>{apyAlgoStake.toFixed(2)}% APR</td>
			<td>
				<a href="https://app.algostake.org" target="_blank">Stake Now ↗</a>
			</td>
		</tr>
		<tr>
			<td>
				<img src="/icons/yieldly.svg" alt="YLDY" class="token-image" />
				Yieldly
				<span>Liquidity Staking</span>
			</td>
			<td>
				<div class="flex-row">
					<div class="stake-item">
						<img src="/icons/yieldly.svg" alt="YLDY" class="token-image" />
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Stake LP</span>
							<strong>YLDY/DPANDA</strong>
						</div>
					</div>
					→
					<div class="stake-item">
						<img src="/icons/yieldly.svg" alt="YLDY" class="token-image" />
						<div class="stake-item__value">
							<span>Earn</span>
							<strong>YLDY</strong>
						</div>
					</div>
				</div>
			</td>
			<td>{durationYieldly} days</td>
			<td>~{apyYieldlyLPStake.toFixed(2)}% APY</td>
			<td>
				<a href="https://app.yieldly.finance" target="_blank">Stake Now ↗</a>
			</td>
		</tr>
		<tr>
			<td>
				<img src="/icons/algostake.svg" alt="STKE" class="token-image" />
				AlgoStake
				<span>Liquidity Staking</span>
			</td>
			<td>
				<div class="flex-row">
					<div class="stake-item">
						<img src="/icons/algo-icon.svg" alt="ALGO" class="token-image" />
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Stake LP</span>
							<strong>ALGO/DPANDA</strong>
						</div>
					</div>
					→
					<div class="stake-item">
						<img src="/apple-icon.png" alt="DPANDA" class="token-image" />
						<div class="stake-item__value">
							<span>Earn</span>
							<strong>DPANDA</strong>
						</div>
					</div>
				</div>
			</td>
			<td>{durationAlgoStakeLP} days</td>
			<td>
				1LP → 200 DPANDA
				<span><a href="https://dopepanda.medium.com/moving-away-from-lp-competition-stake-your-algo-dpanda-lp-tokens-with-algostake-801557fb7caa" target="_blank">See reward schedule</a></span>
			</td>
			<td>
				<a href="https://app.algostake.org" target="_blank">Stake Now ↗</a>
			</td>
		</tr>
	</tbody>
</table>

<style lang="scss">
	table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
		border-radius: 10px;
		overflow: hidden;

		thead tr,
		tbody tr {
			@media screen and (max-width: 767px) {
				th:nth-child(1),
				td:nth-child(1),
				th:nth-child(3),
				td:nth-child(3),
				th:nth-child(6),
				td:nth-child(6) {
					display: none;
				}

				td:nth-child(2) {
					font-size: 0.625rem;
					padding-left: 0.5rem;
					padding-right: 0.5rem;
				}
			}
		}

		tr th {
			font-family: 'HK_Grotesk', 'sans-serif';
			font-size: 0.875rem;
			font-weight: 500;
			color: #fff;
			background-color: #000;
			padding: 1.75rem 1rem;

			@media screen and (max-width: 767px) {
				font-size: 0.75rem;
				padding-top: 1rem;
				padding-bottom: 1rem;
			}
		}

		tr td {
			color: #fff;
			background-color: #555;
			font-size: 0.75rem;
			padding: 1rem 0.75rem;
			border-top: 1px solid #444;

			@media screen and (min-width: 768px) {
				font-size: 1rem;
				padding: 1.5rem 1rem;
			}

			a {
				color: #fff;
				text-decoration: none;
				border-bottom: 1px solid #fff;
			}

			span {
				display: block;
				font-size: 0.625rem;
				padding-top: 0.25rem;
				opacity: 0.5;

				@media screen and (min-width: 767px) {
					font-size: 0.75rem;
				}

				a {
					color: #fff;
				}
			}

			.flex-row {
				display: flex;
				flex-direction: column;

				@media screen and (min-width: 768px) {
					align-items: center;
					justify-content: center;
					flex-direction: row;
				}

				> div {
					padding: 0 1rem;
				}
			}
		}

		img.token-image {
			position: relative;
			top: 2px;
			width: 1.125rem;
			height: 1.125rem;

			@media screen and (max-width: 767px) {
				width: 0.875rem;
				height: 0.875rem;
			}
		}

		.stake-item {
			display: flex;
			align-items: center;
			text-align: left;

			img {
				position: relative;
				top: 2px;
				width: 2rem;
				height: 2rem;
				margin-right: 0.5rem;

				@media screen and (max-width: 767px) {
					width: 1.25rem;
					height: 1.25rem;
				}
			}

			img + img {
				margin-left: -1.25rem;
			}
		}
	}
</style>

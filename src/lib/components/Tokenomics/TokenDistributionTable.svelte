<script lang="ts">
	import ProgressBar from '../ProgressBar.svelte';

	const TOTAL = 1000000000
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
			distributed: 94000000,
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
</script>

<div class="token-distribution__table">
	<table class="full">
		<thead>
			<tr>
				<th width="25%">Type</th>
				<th width="20%">Allocated</th>
				<th width="20%">Distributed</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each distribution as item, i}
				<tr class="category-{item.category}">
					<td>{item.type}</td>
					<td>
						{item.allocated.toLocaleString()}
						<img class="token-image" src="/apple-icon.png" alt="DPANDA" />
						<span>{Number((item.allocated / TOTAL) * 100).toFixed(2)}%</span>
					</td>
					<td>
						{item.distributed.toLocaleString()}
						<img class="token-image" src="/apple-icon.png" alt="DPANDA" />
					</td>
					{#if item.isVesting}
						<td>
							Tokens Vesting
							<span><a href="#vesting">See vesting schedule</a></span>
						</td>
					{:else if item.distributed === 0}
						<td> Tokens in Reserve </td>
					{:else}
						<td>
							<ProgressBar progress={(item.distributed / item.allocated) * 100} />
							<span>{Math.round((item.distributed / item.allocated) * 100)}% distributed</span>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

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
			border-top: 1px solid #fff;

			@media screen and (min-width: 767px) {
				font-size: 1rem;
				padding: 1.5rem 1rem;
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
		}

		&.full {
			th:nth-child(4),
			td:nth-child(4),
			th:nth-child(6),
			td:nth-child(6) {
				@media screen and (max-width: 767px) {
					display: none;
				}
			}

			td:last-child {
				justify-content: center;
			}
		}

		img.token-image {
			position: relative;
			top: 2px;
			width: 1.125rem;
			height: 1.125rem;

			@media screen and (max-width: 767px) {
				display: none;
			}
		}
	}
</style>

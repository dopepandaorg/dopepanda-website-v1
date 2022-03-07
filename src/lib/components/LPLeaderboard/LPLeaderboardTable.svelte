<script lang="ts">
	export let accounts: any[]
	export let dpandaFactor: number
</script>

<div class="leaderboard__table">
	<table class="full">
		<thead>
			<tr>
				<th>Rank</th>
				<th>Address</th>
				<th>Live Stake</th>
				<th>Bonus Week <br/>Snapshot</th>
				<th>Bonus Week <br/> Reward</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each accounts as account, i}
				<tr class="{account.rank === 1 ? 'winner' : ''}">
					<td>
						{#if (account.rank <= 3 && account.rank > 0)}
							<img class="rank-image" src="/images/rank-{account.rank}.svg" alt="{"" + account.rank}"/>
						{:else if (account.rank > 0)}
							{account.rank}
						{:else}
							N/A
						{/if}
					</td>
					<td>
						{account.address.slice(0, 6)} ... {account.address.slice(-6, account.address.length)}
					</td>
					<td>
						{Math.round(account.snapshotLp * dpandaFactor).toLocaleString()}
						<img class="token-image" src="/apple-icon.png" alt="DPANDA"/>
						<span>2022-02-27 16:00 UTC</span>
					</td>
					<td>
						{Math.round(account.balance * dpandaFactor).toLocaleString()}
						<img class="token-image" src="/apple-icon.png" alt="DPANDA"/>

						{#if account['%'] > 0}
							<span>{(account['%'] * 100).toFixed(2)}%</span>
						{/if}
					</td>
					<td>
						{#if account.pendingReward > 0}
							{Math.round(account.pendingReward).toLocaleString()}
							<img class="token-image" src="/apple-icon.png" alt="DPANDA"/>
							<span>DPANDA</span>
						{:else}
							{account.status.label}
							{#if account.status.type === 'INVALID_WITHDRAW'}
								<span><a href="https://algoexplorer.io/tx/group/{encodeURIComponent(account.status.data.t.group)}">Premature Withdrawal</a></span>
							{/if}
						{/if}
					</td>
					<td>
						{account.status.label}
						{#if account.status.type === 'INVALID_WITHDRAW' && account.status.data && account.status.data.t}
							<span><a href="https://algoexplorer.io/tx/group/{encodeURIComponent(account.status.data.t.group)}">Premature Withdrawal</a></span>
						{/if}
					</td>
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
		background: linear-gradient(109.08deg, rgba(253, 157, 93, 0.25) 0%, rgba(253, 44, 160, 0.25) 49.53%, rgba(51, 151, 255, 0.25) 104.51%), #555555;

		tbody tr.winner {
			td {
				font-weight: bold;
				background-color: transparent;
			}
		}

		thead tr, tbody tr {
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
			border-top: 1px solid #444;
			
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
			th:nth-child(1), td:nth-child(1),
			th:nth-child(4), td:nth-child(4),
			th:nth-child(6), td:nth-child(6) {
				@media screen and (max-width: 767px) {
					display: none;
				}
			}
		}

		img.rank-image {
			width: 2.25rem;
			height: 2.25rem;
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
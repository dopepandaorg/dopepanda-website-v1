<script lang="ts">
	export let withdrawals: any[]
</script>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Withdrawal</th>
            <th>Price</th>
            <th>Excess</th>
            <th>Compensation</th>
        </tr>
    </thead>
    <tbody>
        {#each withdrawals as record, i}
            <tr>
                <td>
                    <a target="_blank" href={`https://algoexplorer.io/tx/group/${record.id}`}>{new Date(record.time * 1000).toLocaleString()} ↗</a>
                </td>
                <td>
                    {record.algoSent.toLocaleString()}
                    <img class="token-image algo" src="/icons/algo.svg" alt="Algo"/>
                    <br> + <br>
                    {Math.round(record.dpandaSent).toLocaleString()}
                    <img class="token-image" src="/apple-icon.png" alt="DPANDA"/>
                </td>
                <td>
                    {parseFloat(record.avgPrice).toFixed(6)}
                </td>
                <td>
                    {Math.round(record.excess).toLocaleString()}
                    <img class="token-image" src="/apple-icon.png" alt="DPANDA"/>
                </td>
                <td>
                    {record.compensation.toLocaleString()}
                    <img class="token-image algo" src="/icons/algo.svg" alt="Algo"/>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
		border-radius: 10px;
		overflow: hidden;

		thead tr, tbody tr {
			@media screen and (max-width: 767px) {
				th:nth-child(1), td:nth-child(1),
				th:nth-child(3), td:nth-child(3),
				th:nth-child(6), td:nth-child(6) {
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

				br {
					display: none;
				}
			}

            a {
                color: #fff;
                text-decoration: none;
                border-bottom: 1px solid #fff;
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

            &.algo {
				width: 0.875rem;
				height: 0.875rem;

				@media screen and (max-width: 767px) {
					padding: 2%;
				}
            }
		}
	}
</style>
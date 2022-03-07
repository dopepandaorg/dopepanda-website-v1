<script lang="ts">
	export let week: number;
	export let totalLP: number;
	export let totalReward: number;
</script>

<div class="leaderboard__stats">
	<div class="leaderboard__stat">
		<div class="leaderboard__stat__hold">
			<img class="token-image" src="/apple-icon.png" alt="DPANDA" />
			<div>
				<div class="leaderboard__stat__hold__caption">Hold & Earn</div>
				<div class="leaderboard__stat__hold__label">DPANDA LP</div>
			</div>
		</div>
	</div>
	<div class="leaderboard__stat">
		<div class="leaderboard__stat__label">Total Eligible LP <br />(Bonus Week)</div>
		<div class="leaderboard__stat__value">{totalLP.toLocaleString()} <span>DPANDA</span></div>
	</div>
	<div class="leaderboard__stat">
		<div class="leaderboard__stat__label">Weekly Reward</div>
		<div class="leaderboard__stat__value">{totalReward.toLocaleString()} <span>DPANDA</span></div>
	</div>
	<div class="leaderboard__stat">
		<div class="leaderboard__stat__label">Return-on-DPANDA</div>
		<div class="leaderboard__stat__value">
			{Math.round((totalReward / totalLP / 7) * 365 * 100).toLocaleString()}% <span>(APY)</span>
		</div>
	</div>
</div>

<style lang="scss">
	.leaderboard__stats {
		padding: 2rem;
		margin-bottom: 2rem;

		border-radius: 10px;
		background: linear-gradient(
				109.08deg,
				rgba(253, 157, 93, 0.25) 0%,
				rgba(253, 44, 160, 0.25) 49.53%,
				rgba(51, 151, 255, 0.25) 104.51%
			),
			#555555;

		color: #fff;

		display: flex;
		justify-content: space-between;
		flex-direction: column;

		@media screen and (min-width: 992px) {
			flex-direction: row;
		}

		.leaderboard__stat {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
			flex-direction: column;

			&:first-child {
				margin-top: 0;
				padding: 0;
			}

			@media screen and (min-width: 992px) {
				padding: 0 3rem;
				margin-top: 0;
			}

			&__hold {
				display: flex;
				align-items: center;
				height: 100%;

				img {
					width: 4rem;
					height: 4rem;
					margin-right: 1rem;
				}

				&__caption {
					font-size: 1rem;
					margin-bottom: 0.125rem;
				}

				&__label {
					font-family: 'HK_Grotesk', 'sans-serif';
					font-weight: bold;
					font-size: 1.375rem;
				}
			}

			&__label {
				font-family: 'HK_Grotesk', 'sans-serif';
				font-weight: bold;
				margin-bottom: 0.25rem;

				@media screen and (min-width: 768px) {
					margin-bottom: 0.25rem;
				}
			}

			&__value {
				font-size: 2rem;

				img.token-image {
					position: relative;
					width: 1.625rem;
					height: 1.625rem;
					margin-left: 0.5rem;

					@media screen and (max-width: 767px) {
						display: none;
					}
				}
			}

			span {
				font-size: 0.75rem;
				position: relative;
				top: -2px;
				margin-left: 0.125rem;
				opacity: 0.65;
			}
		}
	}
</style>

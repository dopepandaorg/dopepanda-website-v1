<div class="roadmap">
	<div class="roadmap__category">
		<div class="roadmap__category__title">Q4 2021</div>
		<div class="roadmap__items">
			<div class="roadmap__item completed">
				<small>Done</small>
				Token Creation
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Airdrop 1 & 2
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Panda NFTs
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Tinyman LP
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Tokenomics
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Adopt a Panda!
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Website Launch
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				LP Contest
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Holiday NFTs
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Algo Verification
			</div>
		</div>
	</div>
	<div class="roadmap__category">
		<div class="roadmap__category__title">Q1 2022</div>
		<div class="roadmap__items">
			<div class="roadmap__item completed">
				<small>Done</small>
				Whitepaper
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Algorand Foundation Grant
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Voting & Participation
			</div>
			<div class="roadmap__item completed">
				<small>Done</small>
				Content Tokenization (ASA)
			</div>
		</div>
	</div>
	<div class="roadmap__category">
		<div class="roadmap__category__title">April 2022 (moved over from Q1 2022)</div>
		<div class="roadmap__items">
			<div class="roadmap__item in-progress">
				<small>NFT Marketplace</small>
				Content Curation
			</div>
			<div class="roadmap__item  in-progress">
				<small>NFT Marketplace</small>
				Marketplace Testnet
			</div>
		</div>
	</div>
	<div class="roadmap__category">
		<div class="roadmap__category__title">May 2022</div>
		<div class="roadmap__items">
			<div class="roadmap__item">
				<small>NFT Marketplace</small>
				Marketplace Mainnet Launch
			</div>
			<div class="roadmap__item">
				<small>Platform</small>
				Content Subscriptions
			</div>
			<div class="roadmap__item">
				<small>Platform</small>
				Content Analytics
			</div>
			<div class="roadmap__item">
				<small>Platform</small>
				Platform Testnet
			</div>
		</div>
	</div>
	<div class="roadmap__category">
		<div class="roadmap__category__title">June 2022</div>
		<div class="roadmap__items">
			<div class="roadmap__item">
				<small>Platform</small>
				Platform Mainnet Launch
			</div>
			<div class="roadmap__item">
				<small>Platform</small>
				Crowdfunding Mainnet Launch
			</div>
			<div class="roadmap__item">
				<small>Community</small>
				Participation Rewards
			</div>
		</div>
	</div>
	<div class="roadmap__category">
		<div class="roadmap__category__title">Q3 2022 and Beyond</div>
		<div class="roadmap__items">
			<div class="roadmap__item">
				<small>Dopeverse</small>
				Strategic Partnerships
			</div>
			<div class="roadmap__item">
				<small>Dopeverse</small>
				Governance
			</div>
			<div class="roadmap__item">
				<small>Dopeverse</small>
				Start of Dopeverse
				<img class="badge" src="/images/badge-new.svg" alt="New" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.roadmap {
		display: flex;
		flex-direction: column;
		padding-left: 2rem;
		gap: 2rem;

		@media screen and (min-width: 768px) {
			gap: 4rem;
			padding-left: 3rem;
		}
	}

	.roadmap__category {
		position: relative;

		@media screen and (max-width: 767px) {
			@supports (-webkit-touch-callout: none) and (not (translate: none)) {
				&:not(:last-child) {
					margin-bottom: 1rem;
				}
			}
		}

		&:before {
			content: '';
			position: absolute;
			top: 0.75rem;
			left: -2rem;
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			background-color: #fff;

			@media screen and (min-width: 768px) {
				left: -3rem;
			}
		}

		&:after {
			content: '';
			position: absolute;
			top: 0.75rem;
			left: -2rem;
			bottom: calc(0rem - 3rem);
			margin-left: 0.5rem;
			width: 1px;
			background-color: #fff;

			@media screen and (min-width: 768px) {
				left: -3rem;
				bottom: calc(0rem - 5rem);
			}
		}

		&:last-child {
			&:after {
				display: none;
			}
		}

		&__title {
			font-size: 1.5rem;
			font-family: 'HK_Grotesk', 'sans-serif';

			margin-bottom: 1rem;
		}
	}

	.roadmap__items {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.roadmap__item {
		font-size: 0.875rem;
		font-weight: bold;

		@media screen and (max-width: 767px) {
			@supports (-webkit-touch-callout: none) and (not (translate: none)) {
				margin-right: 1rem;
				margin-bottom: 1rem;
			}
		}

		display: flex;
		flex-direction: column;
		padding: 0.5rem 0.875rem;
		position: relative;

		color: #555;
		background: linear-gradient(180deg, #d3cce3 0%, #e9e4f0 100%);
		border-radius: 3px;

		@media screen and (min-width: 768px) {
			font-size: 1.25rem;
			padding: 0.75rem 1.125rem;
		}

		.badge {
			position: absolute;
			left: 0;
			top: 0;
			margin-top: -0.875rem;
			margin-left: -1rem;
			width: 32px;
			height: 32px;

			@media screen and (min-width: 768px) {
				margin-top: -1.5rem;
				margin-left: -1.5rem;
				width: 50px;
				height: 50px;
				left: 100%;
			}
		}

		small {
			font-size: 0.75rem;
			font-weight: 500;
			margin-bottom: 0.125rem;
		}

		&.completed {
			color: #fff;
			background: linear-gradient(178.57deg, #e1aed0 0%, #fd2ca0 100%);
		}

		&.in-progress {
			background-image: linear-gradient(90deg, #ffb75e 0px, #ffba77 30px, #fd9d5d 50px);
			background-size: 600px;
			animation: shine-lines 1.6s infinite linear;
		}
	}

	@keyframes shine-lines {
		0% {
			background-position: -200px;
		}
		40% {
			background-position: 240px;
		}
		100% {
			background-position: 240px;
		}
	}
</style>

<section id="dopeverse" class="section section--dopeverse">
	<div class="marquee">
		<div class="track">
			COMING Q3 2022 COMING Q3 2022 COMING Q3 2022 COMING Q3 2022 COMING Q3 2022 COMING Q3 2022
			COMING Q3 2022 COMING Q3 2022
		</div>
	</div>

	<div class="section__inner">
		<div class="section__content sticky">
			<h2><span class="gradient">Dopeverse</span></h2>
			<p>
				Our vision is to integrate blockchain with social, community, games, and DeFi. With
				Dopeverse and governance, we aim to fund and build a series of services that match our love
				for the community.
			</p>
			<p>&nbsp;</p>
			<p>NFTs • Games • Subscripions • Social • DeFi • Community Tools</p>
		</div>

		<div class="section__graphic">
			<img src="/images/dopeverse.png" alt="Dopeverse" />
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		position: relative;
		color: #fff;
		background-color: black;
		overflow: hidden;

		.section__inner {
			align-items: center;
			margin-top: 2rem;

			@media screen and (min-width: 768px) {
				margin-top: 0;
			}
		}

		.marquee {
			position: absolute;
			top: -1.5rem;
			left: 0;
			right: 0;
			width: 100vw;
			max-width: 100%;
			height: 200px;
			overflow-x: hidden;

			.track {
				position: absolute;
				white-space: nowrap;
				will-change: transform;
				animation: marquee 16s linear infinite;

				font-family: 'HK_Grotesk', sans-serif;
				text-shadow: 0 0 2px #fff;
				font-size: 3.75rem;
				letter-spacing: 1px;
				color: #000;
			}
		}
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes rotating {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	.section__graphic {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;

		@media screen and (min-width: 768px) {
			margin-top: 0;
		}

		img {
			width: 80%;
			max-width: 420px;

			-webkit-animation: rotating 16s linear infinite;
			animation: rotating 16s linear infinite;
		}
	}
</style>

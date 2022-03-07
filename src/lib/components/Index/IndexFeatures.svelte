<section id="features" class="section section--vertical section--features">
	<div class="section__inner">
		<div class="section__content">
			<h2>Why <span class="gradient">DopePanda?</span></h2>
		</div>

		<div class="section__features">
			<div class="section__feature">
				<div class="section__feature__content">
					<h3><span class="gradient">Tokenize Content</span></h3>
					<p>
						Create a Non-Fungible token for all your creations (Art, Music, Photography, Meme, etc
						...) and list them for fractional purchases. Supporters can purchase fractional NFTs,
						while your creations build intrinsic value.
					</p>
				</div>
				<div class="section__feature__graphic">
					<img src="/images/graphic-1.png" alt="" />
				</div>
			</div>

			<div class="section__feature">
				<div class="section__feature__content">
					<h3><span class="gradient">Hold & Subscribe</span></h3>
					<p>
						Traditional subscriptions don't work in a decentralized world, whether it's monthly
						credit card payments or hefty lifetime payments. With DopePanda, your audience can
						easily purchase and hold fractional NFTs while gaining access to a tier-based membership
						of your content.
					</p>
				</div>
				<div class="section__feature__graphic">
					<img src="/images/graphic-2.png" alt="" />
				</div>
			</div>

			<div class="section__feature">
				<div class="section__feature__content">
					<h3><span class="gradient">Crowdfund with <br />Early Access</span></h3>
					<p>
						Need funds to keep your content creation going? With DopePanda's Crowdfunding tools, you
						may raise funds while providing early access to your audience.
					</p>
				</div>
				<div class="section__feature__graphic">
					<img src="/images/graphic-3.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.section__content {
		text-align: center;
	}

	.section__inner {
		gap: 2vw;
	}

	.section__features {
		width: 100%;
	}

	.section__feature {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		gap: 6vw;
		padding: 10vw 0;

		@media screen and (max-width: 767px) {
			@supports (-webkit-touch-callout: none) and (not (translate: none)) {
				> div:last-child {
					margin-bottom: 6vw;
				}
			}
		}

		@media screen and (min-width: 768px) {
			flex-direction: row;
			padding: 4vw 0;

			&:nth-child(2n) {
				flex-direction: row-reverse;
			}
		}

		&__content {
			@media screen and (min-width: 768px) {
				flex: 1;
			}

			p {
				font-size: 1.25rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__graphic {
			display: flex;
			min-width: 0;
			align-items: center;
			justify-content: center;

			@media screen and (min-width: 768px) {
				flex: 1.5;
			}

			img {
				max-width: 100%;
			}
		}
	}
</style>

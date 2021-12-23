<script lang="ts">
	import NftTile from "../NFTTile.svelte"
</script>

<section id="nft" class="section section--vertical section--nft">
	<div class="section__inner">
		<div class="section__content">
			<h2><span class="gradient">Dope NFTs</span></h2>
		</div>

		<div class="section__nfts">
			<div class="full">
				<div>
					<NftTile
						managerId="F5RPRLSFSQLSWYBZPSRSDJA7XN4U6BJYUWCYI6CRL33S3X3H4JMSAFHDJA"
						description="Look who's the luckiest panda of them all.<br><br><small><em>Lucky Panda NFT holder will gain exclusive access to the Dopeverse in Mid 2022.</em></small>"
						name="Lucky Panda" image="/images/nft-lucky-panda.png"
						classes="christmas"
						price={100} total={1}
					/>
				</div>
			</div>

			<NftTile
				managerId="EN7THKWURGFFIGL4VGJGBROU7T3MVDKON3FPAZGT5S3U6BNKBLPSBSAFKA"
				description="Leave dope brownies and a glass of milk for Santa Panda."
				name="Santa Panda" image="/images/nft-santa-panda.png"
				classes="christmas"
				price={10} total={10}
			/>


			<NftTile
				managerId="DXUAV3FBWB4C2ZKQN356QMCP3LPBUSWJE65LG7OW55BDJ5BP2EDG4CCPL4"
				description="He loves Skiing! He's the best skier in all of North Pole."
				name="Skiing Panda" image="/images/nft-skiing-panda.png"
				classes="christmas"
				price={30} total={5}
			/>


			<NftTile
				managerId="KHATIUHAFHPSW4CL5ZK4TQ5LMFNYEEX46MLBTTHBYYFOLNTTSIQSJVWC54"
				description="Stuck in a wreath, he wishes you an eternity of happiness."
				name="Eternal Panda" image="/images/nft-eternal-panda.png"
				classes="christmas"
				price={30} total={5}
			/>


			<NftTile
				managerId="7QCF3WMDFIG3LUP4YOBYO6G4HVRM53FU6SERKBCP6RGAJBYKT3FFWAHMBY"
				description="Wishing you Happy Holidays from your favorite panda!"
				name="Greeting Panda" image="/images/nft-greeting-panda.png"
				classes="christmas"
				price={10} total={10}
			/>
		</div>

		<div class="section__nfts">
			<div class="nft">
				<div class="nft__image"><img src="/images/nft-smoker-panda.png" alt="Smoker Panda" /></div>
				<h4>Smoker Panda</h4>
				<p>Lights up a bamboo blunt to relax after a long day of doing absolutely nothing.</p>
				<button disabled>Sold Out</button>
			</div>
			<div class="nft">
				<div class="nft__image"><img src="/images/nft-kind-panda.png" alt="Smoker Panda" /></div>
				<h4>Kind Panda</h4>
				<p>
					The kindest of all pandas! All proceeds for my sale will be <a
						href="https://gifts.worldwildlife.org/gift-center/onlinepremiums/onlinecertificate.aspx?bvin=fce2c1fa-8fe4-4302-8b99-850d31f337db"
						target="_blank"
						rel="nofollow">donated to charity</a
					>.
				</p>
				<button disabled>Sold Out</button>
			</div>
			<div class="nft">
				<div class="nft__image"><img src="/images/nft-happy-panda.png" alt="Smoker Panda" /></div>
				<h4>Happy Panda</h4>
				<p>He is satisfied with his life and enjoys every moment.</p>
				<button disabled>Sold Out</button>
			</div>
			<div class="nft">
				<div class="nft__image"><img src="/images/nft-basic-panda.png" alt="Smoker Panda" /></div>
				<h4>Basic Panda</h4>
				<p>
					This is just a 'basic' dope panda. Weighs 45 kilo and eats consistently for 12-14 hours a
					day
				</p>
				<button disabled>Sold Out</button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.section__inner,
	.section__nfts {
		width: 100%;
	}

	.section__nfts {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 3vw;
		gap: 3vw;

		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}

		@media screen and (min-width: 992px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		.full {
			grid-column-start: 1;
			grid-column-end: 2;

			display: flex;
			justify-content: center;

			@media screen and (min-width: 768px) {
				grid-column-start: 1;
				grid-column-end: 3;
			}

			@media screen and (min-width: 992px) {
				grid-column-start: 1;
				grid-column-end: 5;
			}

			> div {
				@media screen and (min-width: 768px) {
					max-width: 420px;
				}
			}
		}
	}

	.nft {
        position: relative;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		border-radius: 4px;
		color: #fff;
		background: radial-gradient(
			119.58% 50% at 50% 50%,
			#000000 0%,
			#3c112d 0.01%,
			#240b1c 73.44%,
			#000000 100%
		);

		.nft__image {
			img {
				max-width: 100%;
				border-radius: 4px;
				border: 2px solid #e1aed0;
			}
		}

		h4 {
			margin-top: 1rem;
		}

		p {
			flex: 1;
		}

		a {
			color: #fff;
		}

		button {
			margin-top: 1rem;
			font-size: 1.125rem;
			font-weight: 500;
			padding: 1rem;
			color: #fff;
			background: linear-gradient(178.57deg, #e1aed0 0%, #fd2ca0 100%);
			border: 4px solid rgba(255, 255, 255, 0.85);
			background-size: 200% 100%;
			background-position: 200% 100%;
			transition: all 0.3s ease-in-out;

			&:hover {
				cursor: pointer;
				background-position: 100% 100%;
			}

			&[disabled] {
				opacity: 0.625;
				pointer-events: none;
				background: grey;

				&:hover {
					background: grey;
				}
			}
		}
	}
</style>

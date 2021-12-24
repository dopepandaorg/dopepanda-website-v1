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
						isExclusive={true}
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
			<NftTile
				managerId=""
				description="Lights up a bamboo blunt to relax after a long day of doing absolutely nothing."
				name="Smoker Panda" image="/images/nft-smoker-panda.png"
				price={10} total={1}
			/>

			<NftTile
				managerId=""
				description={`The kindest of all pandas! All proceeds for my sale will be <a
						style="color: #fff"
						href="https://gifts.worldwildlife.org/gift-center/onlinepremiums/onlinecertificate.aspx?bvin=fce2c1fa-8fe4-4302-8b99-850d31f337db"
						target="_blank"
						rel="nofollow">donated to charity</a
					>.`}
				name="Kind Panda" image="/images/nft-kind-panda.png"
				price={10} total={1}
			/>
			
			<NftTile
				managerId=""
				description="He is satisfied with his life and enjoys every moment."
				name="Happy Panda" image="/images/nft-happy-panda.png"
				price={10} total={1}
			/>

			<NftTile
				managerId=""
				description="This is just a 'basic' dope panda. Weighs 45 kilo and eats consistently for 12-14 hours a day"
				name="Basic Panda" image="/images/nft-basic-panda.png"
				price={10} total={6}
			/>
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
</style>

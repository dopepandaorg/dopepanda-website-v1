<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/styles/normalize.css';
	import '$lib/styles/app.css';
</script>

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	.section {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 6vw;
		padding: 6vw 5vw;

		@media screen and (max-width: 767px) {
			@supports (-webkit-touch-callout: none) and (not (translate: none)) {
				> div:first-child {
					margin-bottom: 6vw;
				}
			}
		}

		@media screen and (min-width: 768px) {
			flex-direction: row;
			padding: 6vw 5vw;
			gap: 6vw;

			> div {
				flex: 1;
			}
		}

		@media screen and (min-width: 992px) {
			padding: 4vw 3vw;
		}

		@media screen and (min-width: 1200px) {
			padding: 4vw 3vw;
		}

		@media screen and (min-width: 1500px) {
			padding: 4rem 3rem;
		}

		.section__inner {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 6vw;
			padding-top: 6vw;
			padding-bottom: 6vw;
			margin: 0 auto;

			@media screen and (max-width: 767px) {
				@supports (-webkit-touch-callout: none) and (not (translate: none)) {
					> div:first-child {
						margin-bottom: 6vw;
					}
				}
			}

			@media screen and (min-width: 768px) {
				flex-direction: row;
				padding-top: 4vw;
				padding-bottom: 4vw;
			}

			@media screen and (min-width: 1500px) {
				max-width: 1440px;
			}

			> div {
				flex: 1;
			}
		}

		.section__content {
			&.sticky {
				@media screen and (min-width: 768px) {
					position: sticky;
					top: 2rem;
				}
			}

			p {
				font-size: 1.125rem;

				@media screen and (min-width: 768px) {
					font-size: 1.375rem;
					max-width: 80%;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		.section__graphic {
			img {
				max-width: 100%;
			}
		}

		&--full {
			width: 100%;
			height: 100%;
			height: 100vh;
		}

		&--accent {
			color: #fff;
			background: radial-gradient(100% 846.28% at 0% 100%, #354cf6 0%, #fd2ca0 100%);
		}

		&--vertical {
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&,
			.section__inner {
				flex-direction: column;
				justify-content: center;
				align-items: center;

				@media screen and (min-width: 768px) {
					flex-direction: column;
				}
			}
		}
	}

	.container {
		max-width: none;
		margin: 0 auto;

		padding: 6vw 5vw;

		@media screen and (min-width: 1200px) {
			max-width: 1140px;
		}
	}

	span.gradient {
		background: linear-gradient(109.08deg, #fd9d5d 0%, #fd2ca0 49.53%, #3397ff 104.51%);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;

		@media screen and (max-width: 767px) {
			text-shadow: 0px 0px #00000000;
			display: block;
		}
	}
</style>

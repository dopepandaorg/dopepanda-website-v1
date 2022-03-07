<script>
	import { fix_and_outro_and_destroy_block } from 'svelte/internal';
</script>

<footer class="section section--footer">
	<div class="section__inner">
		<div class="mascot"><img src="/mascot.png" alt="DopePanda Mascot" /></div>
		<div class="copyright-text">© DopePanda {new Date().getFullYear()}, All Rights Reserved</div>
	</div>
</footer>

<style lang="scss">
	footer.section--footer {
		color: #fff;
		background-color: #111;

		.section__inner {
			padding: 0;
			flex-direction: column;
			align-items: center;
			grid-gap: 0;
			gap: 0;
		}

		.mascot {
			img {
				max-width: 88px;
			}
		}

		.copyright-text {
			margin-top: 1.25rem;
			text-align: left;
			opacity: 0.75;
		}
	}
</style>

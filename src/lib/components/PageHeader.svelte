<script lang="ts">
	import { goto } from '$app/navigation';
	export let backLink = '/';
	export let title: string;

	const goBack = () => {
		goto(backLink);
	};
</script>

<div class="header__wrap">
	<div class="container">
		<div class="header">
			<div>
				<button class="back" on:click={goBack}>Back</button>

				<h1 class="title">
					{@html title}
				</h1>
			</div>
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 90%;
		}
	}

	.header__wrap {
		background: linear-gradient(109.08deg, #fd9d5d 0%, #fd2ca0 49.53%, #3397ff 104.51%);
		color: #fff;

		.header {
			display: flex;
			flex-direction: column;

			@media screen and (min-width: 767px) {
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}

			> div {
				flex: 1;
			}

			.back {
				padding: 0.75rem 1.75rem;
				border-radius: 10px;
				border: 2px solid #fff;
				color: #fff;
				background-color: transparent;
				margin-bottom: 0.75rem;
				transition: all 0.3s;

				&:hover {
					cursor: pointer;
					background-color: #fff;
					color: #444;
				}
			}
		}
	}

	.title {
		font-size: 1.875rem;

		@media screen and (min-width: 767px) {
			font-size: 3rem;
		}
	}
</style>

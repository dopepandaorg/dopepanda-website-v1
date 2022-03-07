<script lang="ts">
	export let title: string;
	export let content: string;
	export let isOpen = false;

	const toggle = () => (isOpen = !isOpen);
</script>

<div class="accordion-item">
	<button class="accordion-item__action" on:click={toggle} aria-expanded={isOpen}>
		<svg
			style="tran"
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
		>
		{title}
	</button>

	{#if isOpen}
		<div class="accordion-item__content">
			{@html content}
		</div>
	{/if}
</div>

<style lang="scss">
	button {
		border: none;
		background: none;
		display: flex;
		align-items: center;
		color: inherit;
		font-size: 1.125rem;
		padding: 0.75rem 0;
		margin: 0;
		text-align: left;
		cursor: pointer;

		@media screen and (min-width: 768px) {
			font-size: 1.5rem;
		}
	}

	svg {
		transition: transform 0.2s ease-in;
		margin-right: 0.625rem;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}

	.accordion-item {
		margin-bottom: 1rem;

		&__content {
			font-size: 1rem;
			padding: 1.5rem;
			background-color: #eee;
			border-radius: 10px;

			@media screen and (min-width: 768px) {
				font-size: 1.125rem;
			}
		}
	}
</style>

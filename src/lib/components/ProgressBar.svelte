<script lang="ts">
	export let progress: number;
</script>

<div class="progress-bar">
	<div class="progress-bar__track" style="width: {progress}%;" />
</div>

<style lang="scss">
	.progress-bar {
		display: inline-block;
		width: 280px;
		max-width: 100%;
		height: 1.25rem;
		background-color: rgba(0, 0, 0, 0.25);
		border: 2px solid rgba(0, 0, 0, 0.125);
		border-radius: 2rem;
		overflow: hidden;

		.progress-bar__track {
			height: 100%;
			border-radius: 2rem;
			background: linear-gradient(109.08deg, #fd9d5d 0%, #fd2ca0 49.53%, #3397ff 104.51%);
		}
	}
</style>

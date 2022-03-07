<div class="spinner-wrap">
	<div class="three-quarter-spinner" />
</div>

<style>
	.spinner-wrap {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 2rem 0;
	}

	.three-quarter-spinner {
		width: 30px;
		height: 30px;
		border: 3px solid #fd9b5e;
		border-top: 3px solid transparent;
		border-radius: 50%;
		animation: spin 0.5s linear 0s infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>

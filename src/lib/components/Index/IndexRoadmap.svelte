<script context="module" lang="ts">
	import Roadmap from '$lib/components/Roadmap.svelte';
</script>

<section id="roadmap" class="section section--accent section--roadmap">
	<div class="section__inner">
		<div class="section__content sticky">
			<h2>Roadmap</h2>
			<p>
				We have an ambitious goal to build the next-gen content creation platform. Our roadmap
				guides our journey to regularly build and release valuable tools to support our creator
				community.
			</p>
			<p><small>*Roadmap is subject to updates for greater detail.</small></p>
		</div>

		<div class="section__roadmap">
			<Roadmap />
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		min-height: 1000px;
	}

	.section__roadmap {
		flex: 1.5 !important;
	}
</style>

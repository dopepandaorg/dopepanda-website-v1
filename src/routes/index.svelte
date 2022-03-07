<script context="module" lang="ts">
	export const prerender = true;

	import IndexNFT from '$lib/components/Index/IndexNFT.svelte';
	import IndexCommunity from '$lib/components/Index/IndexCommunity.svelte';
	import IndexFeatures from '$lib/components/Index/IndexFeatures.svelte';
	import IndexIntro from '$lib/components/Index/IndexIntro.svelte';
	import IndexRoadmap from '$lib/components/Index/IndexRoadmap.svelte';
	import IndexToken from '$lib/components/Index/IndexToken.svelte';
	import IndexDopeverse from '$lib/components/Index/IndexDopeverse.svelte';
</script>

<svelte:head>
	<title>Next-gen content creation platform built on Algorand | DopePanda</title>
</svelte:head>

<IndexIntro />
<IndexFeatures />
<IndexRoadmap />
<IndexNFT />
<IndexToken />
<IndexDopeverse />
<IndexCommunity />

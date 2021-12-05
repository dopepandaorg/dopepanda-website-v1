<script context="module" lang="ts">
	export const prerender = true

	import IndexNFT from '$lib/components/IndexNFT.svelte'
	import IndexCommunity from '$lib/components/IndexCommunity.svelte'
	import IndexFeatures from '$lib/components/IndexFeatures.svelte'
	import IndexIntro from '$lib/components/IndexIntro.svelte'
	import IndexRoadmap from '$lib/components/IndexRoadmap.svelte'
	import IndexToken from '$lib/components/IndexToken.svelte'
	import IndexDopeverse from '$lib/components/IndexDopeverse.svelte'
</script>

<svelte:head>
	<title>Next-gen content creation platform built on Algorand | Dope Panda</title>
</svelte:head>

<IndexIntro />
<IndexFeatures />
<IndexRoadmap />
<IndexNFT />
<IndexToken />
<IndexDopeverse/>
<IndexCommunity />
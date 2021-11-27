<script context="module" lang="ts">
	export const prerender = true;
    
    import Alert from '$lib/components/Alert.svelte'
</script>

<svelte:head>
	<title>Dope Panda | Community Owned, Commmunity Driven.</title>
</svelte:head>

<section>
	<Alert/>

    <section id="intro" class="section section--intro">
        <div class="intro-logo">
            <img src="./mascot.png" alt="Dope Panda Mascot">
        </div>

        <div class="intro-title">
            Dope Panda
        </div>

        <div class="intro-description">
            <p>
                Dope Panda is a meme coin created on the Algorand blockchain.
            </p>
            <p>
                We are community first, community owned and community governed.
            </p>
        </div>
    </section>
</section>

<style>
	#intro {
		min-height: 100vh;
	}
</style>

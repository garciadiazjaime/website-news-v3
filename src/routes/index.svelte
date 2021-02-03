<script>
	export let news = []

	import Grid from '../components/Grid.svelte'
</script>

<script context="module">
	export async function preload() {
		let response = await this.fetch('./data/homepage.json')
		const news = await response.json()

		return {
			news,
		}
	}
</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Noticias de Tijuana</title>
</svelte:head>

<h1>Noticias de Tijuana</h1>

<Grid items={news} />

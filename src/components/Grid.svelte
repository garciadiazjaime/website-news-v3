<script>
	export let items

  import Card from './Card.svelte'
</script>

<style>
	.container {
		font-size: 20px;
	}

	.grid-container {
		display: grid;
		grid-column-gap: 20px;
		grid-row-gap: 12px;
		grid-template-columns: repeat( auto-fit, minmax(100%, 1fr) );
	}

	@media (min-width: 600px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(48%, 1fr) );
		}
	}

	@media (min-width: 900px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(30%, 1fr) );
		}
	}

	@media (min-width: 1200px) {
		.grid-container {
			grid-template-columns: repeat( auto-fit, minmax(23%, 1fr) );
		}
	}
</style>

<div class="container">
	<div class="grid-container">
		{#each items as item}
			<Card 
				id={item._id} 
				url={item.url} 
				title={item.title} 
				image={item.image} 
				description={item.description}
				source={item.source}
			/>
		{/each}
	</div>
</div>

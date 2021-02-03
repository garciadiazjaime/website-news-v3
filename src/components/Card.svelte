<script>
  export let id;
  export let url;
	export let title;
	export let image;
  export let description;
  export let source;

  let imgUrl = ''

  let observer = null

  if (process.browser) {
    observer = new IntersectionObserver(onIntersect, {rootMargin: '200px'});
  }

  function onIntersect(entries) {
    if (!imgUrl && entries[0].isIntersecting) {
      imgUrl = image
    }
  }


  function lazyLoad(node) {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node)
      }
    }
  }

  function clickHandler() {
    window.open(url);
  }
</script>

<style>
  .card {
    padding: 6px 0;
    box-shadow: 1px 1px 5px 5px #d8d8d8;
    width: 100%;
  }

  .card:hover {
    cursor: pointer;
  }

  h3, p, small {
    padding: 12px;
  }

  h3 {
    margin: 0;
    padding: 12px;
  }

  img {
    height: 180px;
    min-height: 180px;
    width: 100%;
    object-fit: cover;
  }
</style>

<div class="card" on:click={clickHandler} data-id={id}>
  <h3>{title}</h3>

  <img src={imgUrl} alt={title} use:lazyLoad />

  {#each description.slice(0, 2) as row}
    <p>{row}</p>
  {/each}

  <div><small>{source}</small></div>
</div>

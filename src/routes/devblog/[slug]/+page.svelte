<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article class="prose">
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

<style>
  article {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    color: #ffffff;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(62, 46, 67, 0.322);
    transition: transform 0.3s ease;
  }
  h1:hover {
    transform: scale(1.015);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
</style>
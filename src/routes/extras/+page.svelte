<script>
    import Extras from '$lib/Extras.svelte';
    import { Fa } from 'svelte-fa';
    import {base} from '$app/paths';

    const extraList = [
    {
      title: "Soy Clicker",
      description: "Sharty-award winning clicker game.",
      imageUrl: "/images/clickergoat.png",
      link: "clicker",
    },
    {
      title: "DJ Spit's Adventure",
      description: "Play as DJ Spit in this thrilling pixelated adventure.",
      imageUrl: "images/djspit.png",
      link: "https://insanitial.itch.io/spitsadventure",
    },
    {
      title: "Unscary Maze Game",
      description: "A maze game that is not scary at all.",
      imageUrl: "images/mazegame.png",
      link: "https://hajimemashitekaczynskiowo.github.io/peenie/trials/snakelog",
    },
    ]
</script>
<head>
    <title>1337XS - Devblog</title>
</head>
<main>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {#each extraList as extra}
          <Extras
            title={extra.title}
            description={extra.description}
            imageUrl={extra.imageUrl}
            link={extra.link}
          />
        {/each}
      </div>

</main>
<style>
    main {
        min-height: 100vh; /* Ensure full viewport height */
        display: flex;
        flex-direction: column;
        align-items: center; /* Horizontal center */
        padding: 2rem;
    }

    .main-header {
        width: 100%;
        max-width: 1200px; /* Optional: limit header width */
        text-align: center;
        padding: 1rem 0;
        position: sticky;
        top: 0;
        
        /* Optional styling */
        background-color: bg-base-100; /* or use bg-base-100 with DaisyUI */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* subtle shadow */
        z-index: 10; /* ensure header stays above content */
    }
</style>
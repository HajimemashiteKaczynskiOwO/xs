<script>
    import Extras from '$lib/Extras.svelte';
    import { Fa } from 'svelte-fa';
    import {base} from '$app/paths';

    const extraList = [
    {
      title: "Soy Clicker",
      description: "Sharty-award winning clicker game.",
      imageUrl: "images/clickergoat.png",
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
        min-height: 100vh; 
        display: flex;
        flex-direction: column;
        align-items: center; 
        padding: 2rem;
    }

</style>
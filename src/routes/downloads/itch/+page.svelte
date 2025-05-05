<script>
    import Fa from 'svelte-fa'
	  import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Games from '$lib/Games.svelte';

    const gameList = [
    {
      title: "Sir Truck",
      description: "Vampire Survivors-like game where you drive a truck and survive waves against other cars.",
      imageUrl: "https://img.itch.zone/aW1nLzk4MDAzODMuanBn/original/xV8s%2BY.jpg",
      price: "Completely Free",
      compatibility: ['web'],
      link: "https://lukemuscat.itch.io/sir-truck"
    },
    {
        title: "You Did It Faster Before",
        description: "A game where you have to complete levels ASAP.",
        imageUrl: "https://img.itch.zone/aW1nLzQ4MTE5MzguZ2lm/original/ikKpl7.gif",
        price: "Completely Free",
        compatibility: ['download'],
        link: "https://callofthevoid.itch.io/you-did-it-faster-before"
    },
    {
    title: "PolyTrack",
    description: "Low-poly racing game with loops, jumps and high speeds, where every millisecond counts.",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMTgyOTg5My8yMDYwODQ5NC5wbmc=/original/8F4Wg7.png",
    price: "Completely Free",
    compatibility: ['web', 'download'],
    link: "https://kodub.itch.io/polytrack"
  },
  {
    title: "Get Yoked",
    description: "A game where you play as a yoked bodybuilder and gain as much muscle as possible.",
    imageUrl: "https://img.itch.zone/aW1nLzE5NDg4MDY1LnBuZw==/original/0eezqm.png",
    price: "Completely Free",
    compatibility: ['web', 'download'],
    link: "https://gregs-games.itch.io/get-yoked-2"
  },
  {title: "Berserk Survivor",
    description: "Hack n Slash arena fan game, set in Kentaro Miura's BERSERK manga/anime universe.",
    imageUrl: "https://img.itch.zone/aW1nLzE0NjMyNzYwLnBuZw==/original/Be283p.png",
    price: "Completely Free",
    compatibility: ['web', 'download'],
    link: "https://renzk.itch.io/berserksurvivor"
  },
  {title: "Baldi's Basics",
    description: "Baldi's Basics in Education and Learning is a state-of-the-art, fully 3D interactive, fun-time educational game that teaches a slew of subjects! From math to spelling, you'll learn a lot!",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMjM5ODQxLzE2NTAzMjUucG5n/original/Y8LdOc.png",
    price: "Completely Free",
    compatibility: ['download'],
    link: "https://basically-games.itch.io/baldis-basics"
  },
  {title: "Half Sword",
    description: "Physics-based 3D sword fighting game, where you can use your sword to attack, block and parry.",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMTA4OTQ1NC8xMTMxMzUwNS5naWY=/original/kKvHAh.gif",
    price: "Completely Free",
    compatibility: ['download'],
    link: "https://knives-frank.itch.io/halfsword"
  },
  {title: "Assessment Examination",
    description: "Thanks for applying to the Authenticity Assessment Department. We wish you luck on your upcoming examination!",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMTQyMDc0Ny84Mjc0NTM1LnBuZw==/original/J1xk4u.png",
    price: "Completely Free",
    compatibility: ['download'],
    link: "https://wenderlygames.itch.io/assessment-examination"
  },
  {title: "Atlyss",
    description: "AORPG game where you can explore the world and fight against monsters. Promise it's not a gooner game.",
    imageUrl: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/11/atlyss-co-op-rpg-steam.jpg",
    price: "Completely Free",
    compatibility: ['download'],
    link: "https://kiseff.itch.io/atlyss"
  },
  {title: "Little Chef",
    description: "Fun and cute 2D physics-based cooking game with a focus on experimentation and discovery.",
    imageUrl: "https://img.itch.zone/aW1hZ2UvMjA5Njg2MC8xMjM0NTc2MS5wbmc=/original/%2FY4iaa.png",
    price: "Completely Free",
    compatibility: ['web','download'],
    link: "https://truebiger.itch.io/little-chef"
  },
  {title: "Karlson 2D",
    description: "Short game made in 2 days for the Mix And Game Jam, hosted by Mix and Jam. The theme was to recreate a mechanic from a game in another dimension.",
    imageUrl: "https://i.ytimg.com/vi/ozvs5dA9_aQ/maxresdefault.jpg",
    price: "Completely Free",
    compatibility: ['download'],
    link: "https://truebiger.itch.io/little-chef"
  },
]
</script>
<div style="display: flex; gap: 0.5rem; justify-content: center; align-items: center; margin-top: 2rem;">
    <a href="https://www.itch.io/games" target="_blank"><h1 style="font-size: 6rem; text-align: center; margin-bottom: 1rem; transition: transform 0.3s ease; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); color:red;">Itch.io </h1></a><h1 class="main-title">Games</h1>
</div>
<div class="cards" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {#each gameList as game}
          <Games
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            price={game.price}
            compatibility={game.compatibility}
            link={game.link}
          />
        {/each}
      </div>
</div>


<style global>
    main {
        min-height: 100vh; /* Ensure full viewport height */
        display: flex;
        flex-direction: column;
        align-items: center; /* Horizontal center */
        padding: 2rem;
    }
    /* Carousel arrows */
  .carousel {
    scroll-snap-type: x mandatory;
    overflow-x: auto;
  }
  .carousel-item {
    scroll-snap-align: start;
  }

    .main-title {
        font-size: 6rem;
        text-align: center;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        animation: rainbow 9s infinite,glow 9s infinite;
    }
    .main-title:hover {
        transform: scale(1.015);
    }
    .feature-card {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
    }
    .feature-card a {
        color: #4687e7;
        text-decoration: none;
        font-size: 1rem;
        line-height: 1.5;
        transition: color 0.3s ease;
    }
    .feature-card a:hover{
        color: #4cc6ff;
    }
    .feature-card p {
        font-size: 1.4rem;
        line-height: 1.5;
        color: #fff;
    }
    .feature-card ul {
        font-size: 1.4rem;
        line-height: 1.5;
        color: #fff;
    }
    .sub-title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        opacity: 0.9;
        transition: all 0.3s ease;
    }

    .sub-title:hover {
        transform: scale(1.015);
        opacity: 1;
    }


    @keyframes glow {
        0% {
    text-shadow:0 0 5px red,0 0 10px red,0 0 15px red,0 0 20px red,0 0 25px red,0 0 30px red,0 0 35px red
  }
  14% {
    text-shadow:0 0 5px orange,0 0 10px orange,0 0 15px orange,0 0 20px orange,0 0 25px orange,0 0 30px orange,0 0 35px orange
  }
  28% {
    text-shadow:0 0 5px yellow,0 0 10px yellow,0 0 15px yellow,0 0 20px yellow,0 0 25px yellow,0 0 30px yellow,0 0 35px yellow
  }
  42% {
    text-shadow:0 0 5px green,0 0 10px green,0 0 15px green,0 0 20px green,0 0 25px green,0 0 30px green,0 0 35px green
  }
  57% {
    text-shadow:0 0 5px blue,0 0 10px blue,0 0 15px blue,0 0 20px blue,0 0 25px blue,0 0 30px blue,0 0 35px blue
  }
  71% {
    text-shadow:0 0 5px indigo,0 0 10px indigo,0 0 15px indigo,0 0 20px indigo,0 0 25px indigo,0 0 30px indigo,0 0 35px indigo
  }
  85% {
    text-shadow:0 0 5px violet,0 0 10px violet,0 0 15px violet,0 0 20px violet,0 0 25px violet,0 0 30px violet,0 0 35px violet
  }
  to {
    text-shadow:0 0 5px red,0 0 10px red,0 0 15px red,0 0 20px red,0 0 25px red,0 0 30px red,0 0 35px red
  }
    }
    @keyframes rainbow {
        0% { color: rgb(255, 46, 46); }
        14% { color: rgb(255, 185, 55); }
        28% { color: rgb(255, 255, 70); }
        42% { color: rgb(0, 188, 0); }
        57% { color: rgb(65, 65, 255); }
        71% { color: rgb(135, 19, 218); }
        85% { color: rgb(255, 150, 255); }
        100% { color: rgb(255, 46, 46); }
    }
</style>
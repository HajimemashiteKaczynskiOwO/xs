<script>
    import Fa from 'svelte-fa'
	  import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Cards from '$lib/Cards.svelte';

    const distroList = [
    {
      title: "Linux Mint",
      description: "Starter-friendly Linux distribution based on Ubuntu and Debian.",
      imageUrl: "https://linuxiac.b-cdn.net/wp-content/uploads/2023/05/linuxmint.jpg",
      price: "Completely Free",
      compatibility: [],
      link: "https://linuxmint.com/"
    },
    {
        title: "Ubuntu",
        description: "Starter-friendly popular Linux distribution based on Debian, known for its ease of use.",
        imageUrl: "https://letmetechyou.com/wp-content/uploads/2022/06/ubuntu-linux-in-eve-ng.png",
        price: "Completely Free",
        compatibility: [],
        link: "https://ubuntu.com/"
    },
    {
        title: "OpenSUSE",
        description: "Community-driven Linux distribution known for its stability and flexibility. Exists in two versions: Leap and Tumbleweed.",
        imageUrl: "https://fosstorrents.com/img/Banner/opensuse.webp",
        price: "Completely Free",
        compatibility: [],
        link: "https://www.opensuse.org/"
    },
    {
        title: "Fedora",
        description: "Community-driven Linux distribution known for its cutting-edge features.",
        imageUrl: "https://linuxiac.b-cdn.net/wp-content/uploads/2020/08/fedora.png",
        price: "Completely Free",
        compatibility: [],
        link: "https://fedoraproject.org/"
    },
    {
        title: "Nobara",
        description: "A Fedora-based Linux distribution designed for gaming and multimedia.",
        imageUrl: "https://gearous.myshopify.com/cdn/shop/files/JJKnobara_sample.png?v=1709788455",
        price: "Completely Free",
        compatibility: [],
        link: "https://nobaraproject.org/"
    },
    {
        title: "Arch Linux",
        description: "Lightweight and flexible distro, btw. Not for beginners and pretty advanced.",
        price: "Completely Free",
        imageUrl: "https://preview.redd.it/na6opzjr42601.jpg?width=640&crop=smart&auto=webp&s=b0c1e2fe0b0d7c6fba0a2ba1b9677fa13b07e322",
        compatibility: [],
        link: "https://archlinux.org/"
    },

  ];
</script>
<div class="main-title">
    <h1>Operating Systems</h1>
</div>
<main>
<div class="cards" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {#each distroList as distro}
          <Cards
            title={distro.title}
            description={distro.description}
            imageUrl={distro.imageUrl}
            price={distro.price}
            compatibility={distro.compatibility}
            link={distro.link}
          />
        {/each}
      </div>
</div>

<div class="popups">

</div>

</main>
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
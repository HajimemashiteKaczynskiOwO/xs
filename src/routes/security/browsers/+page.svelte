<script>
    import Fa from 'svelte-fa'
	  import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Cards from '$lib/Cards.svelte';

    const softwareList = [
    {
      title: "Firefox",
      description: "Open-source web browser developed by Mozilla Foundation, known for its speed and privacy features.",
      imageUrl: "https://www.mozilla.org/media/protocol/img/logos/firefox/browser/og.4ad05d4125a5.png",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://www.mozilla.org/en-US/firefox/new/"
    },
    {
        title: "Waterfox", 
        description: "Open-source web browser based on Firefox, If you are looking for a lightweight, fast and secure web browser compatible with all Firefox extensions, downloading Waterfox is an excellent choice.",
        imageUrl: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/waterfox-safe.jpg",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://www.waterfox.net/"
    },
    {
        title: "Floorp",
        description: "Open-source, privacy-focused web browser based on Firefox, designed to provide a secure and customizable browsing experience.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgEt1q-L-VEcz4m4sFR_aAUWyU8QAHcbC-g&s",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://floorp.app/en-US/download"
    },
    {
        title: "LibreWolf",
        description: "Open-source fork of Firefox, with an emphasis on privacy and security.",
        imageUrl: "https://fostips.com/wp-content/uploads/2023/06/librewolf-feature.webp",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://librewolf.net/"
    },
    {
        title: "Zen",
        description: "Open-source, always up-to-date, and quite unique.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92mxVKb4zVNWlBWUGTt9VTt5j2SRa8ASs-y3MzKFgE2QURE2B5mLSo9J18tLfRue2sBE&usqp=CAU",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://zen-browser.app/"
    },
    {
        title: "Mullvad Browser",
        description: "Privacy-focused web browser based on Firefox, designed to protect your online privacy and anonymity.",
        imageUrl: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/78ff0e25-ff2a-4274-a182-d5f16f28044f/1137965709/mullvad-browser-down-load-mullvad-browser-for-windows.jpg",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://mullvad.net/en/download/browser/"
    },
    {
        title: "Tor Browser",
        description: "A web browser that lets users access a network that anonymizes web traffic to provide private web browsing.",
        imageUrl: "https://i.pcmag.com/imagery/reviews/00LTpnLw33TDfLcUi4EWfEO-19..v1693231577.jpg",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://www.torproject.org/download/"
    }
  ];
</script>
<div class="main-title">
    <h1>Browsers</h1>
</div>
<main>
<div class="cards" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {#each softwareList as software}
          <Cards
            title={software.title}
            description={software.description}
            imageUrl={software.imageUrl}
            price={software.price}
            compatibility={software.compatibility}
            link={software.link}
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
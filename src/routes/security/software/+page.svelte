<script>
    import Fa from 'svelte-fa'
	  import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Cards from '$lib/Cards.svelte';

    const softwareList = [
    {
      title: "LibreOffice",
      description: "Open-source office suite that is a free alternative to e.g Microsoft Office.",
      imageUrl: "https://swedroid.se/wp-content/uploads/2013/05/libreoffice-711x533.png",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "#libreoffice"
    },
    {
        title: "OBS Studio",
        description: "Open-source software for video recording and live streaming.",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1905180/header.jpg?t=1733595297",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://obsproject.com/"
    },
    {
    title: "WinDirStat",
    description: "Open-source disk usage statistics viewer and cleanup tool for Windows.",
      imageUrl: "https://sm.pcmag.com/t/pcmag_gr/photo/default/windir_e1sz.640.jpg",
      price: "Completely Free",
      compatibility: ['windows'],
      link: "https://windirstat.net/"
    },
    {
      title: "7-Zip",
      description: "Open-source file archiver with a high compression ratio.",
      imageUrl: "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2016/05/06235740/7zip.png",
      price: "Completely Free",
      compatibility: ['windows', 'linux'],
      link: "https://www.7-zip.org/"
    },
    {
      title: "Audacity",
      description: "Open-source & cross-platform audio software for multi-track recording and editing.",
      imageUrl: "https://www.radioworld.com/wp-content/uploads/2021/05/Audacity-725.jpg",
      price: "Completely Free",
      compatibility: ['windows', 'linux'],
      link: "https://support.audacityteam.org/additional-resources/changelog/older-versions/audacity-2.x/audacity-2.4.0/audacity-2.4.1"
    },
    {
      title: "VLC Media Player",
      description: "Free and open-source cross-platform media player.",
      imageUrl: "https://ubunlog.com/wp-content/uploads/2018/09/VLC-media-player.jpg",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://www.videolan.org/vlc/"
    },
    {
        title: "VirtualBox",
        description: "Open source general-purpose full virtualization software for x86_64 hardware",
        imageUrl: "https://img.lancdn.co/news/2024/06/2833.png",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://www.virtualbox.org/"
    },
    {
        title: "Krita",
        description: "Free and open-source graphics editor designed primarily for digital painting and animation.",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/280680/capsule_616x353.jpg?t=1724367020",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://krita.org/en"
    },
    {
      title: "GIMP",
      description: "Free & open-source image editor comparable to Photoshop.",
      imageUrl: "https://www.spacebar.news/content/images/size/w1200/2024/05/gimp.jpg",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://www.gimp.org/"
    },
    {
        title: "Paint.NET",
        description: "Closed-source image editor for Windows, known for its simplicity and ease of use.",
        imageUrl: "https://www.xp-pen.com/Uploads/forum/images/2019/12/31/1577763064690800.jpg",
        price: "Completely Free",
        compatibility: ['windows'],
        link: "https://getpaint.net/"
    },
    {
      title: "Blender",
      description: "Open-source 3D computer graphics software toolset.",
      imageUrl: "https://wallpaperaccess.com/full/4484718.png",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://www.blender.org/"
    },
    {
      title: "Playnite",
      description: "Open-source video game library manager and launcher with support for 3rd party libraries.",
      imageUrl: "https://repository-images.githubusercontent.com/86182490/c9590600-7403-11ea-91aa-1446457c89c9",
      price: "Completely Free",
      compatibility: ['windows'],
      link: "https://playnite.link/"
    },
    {
      title: "Lutris",
      description: "Open-source gaming platform for Linux that helps you install and manage games.",
      imageUrl: "https://www.gamingonlinux.com/uploads/articles/tagline_images/1553980753id25262gol.jpg",
      price: "Completely Free",
      compatibility: ['linux'],
      link: "https://lutris.net/"
    }
    // Add more items as needed
  ];
</script>
<div class="main-title">
    <h1>Software</h1>
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
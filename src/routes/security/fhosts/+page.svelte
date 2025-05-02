<script>
    import Fa from 'svelte-fa'
	  import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Cards from '$lib/Cards.svelte';

    const softwareList = [
    {
      title: "JDownloader2",
      description: "Open-source downloader that allows you to quickly and efficiently download files from services like Mega, Google Drive, etc.",
      imageUrl: "https://blog.desdelinux.net/wp-content/uploads/2018/06/Logo_JDownloader2_desdelinux.png",
      price: "Completely Free",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://jdownloader.org/"
    },
    {
        title: "Motrix",
        description: "Motrix is a full-featured download manager that supports HTTP, FTP, BitTorrent, and Magnet links.",
        imageUrl: "https://itsfoss.com/content/images/wordpress/2021/11/Motrix-ft.png",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://motrix.app/"
    },
    {
        title: "Gopeed",
        description: "Gopeed is a free and open-source download manager that allows you to download files from various file hosting services.",
        imageUrl: "https://packagestore.com/wp-content/uploads/2023/05/C67C6E3CAE79A95342485676571E8A5C.png",
        price: "Completely Free",
        compatibility: ['windows', 'linux', 'mac'],
        link: "https://gopeed.com/"
    },
    {
        title: "Fuckingfast",
        description: "Fuckingfast is a privacy focused file hosting service that doesn't store IP / logs, and allows you to upload files up to 10GB in size.",
        imageUrl: "https://m.media-amazon.com/images/I/31O4CFPI5oL._AC_UF1000,1000_QL80_.jpg",
        price: "Completely Free",
        compatibility: [],
        link: "https://fuckingfast.co/"
    },
    {
        title: "Gofile",
        description: "Gofile is a free file hosting and sharing service that allows you to upload and share files without any restrictions.",
        imageUrl: "https://bytesbin.com/wp-content/uploads/GoFile.io-Review-930x620.png",
        price: "Completely Free",
        compatibility: [],
        link: "https://gofile.io"
    },
    {
        title: "Mediafire",
        description: "Mediafire is a file hosting and sharing service that allows you to upload and share files with others.",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/s7ASChYXWKN2AcZxXhekKQ.jpg",
        price: "Completely Free",
        compatibility: [],
        link: "https://www.mediafire.com/"
    },
    {
        title: "Mega",
        description: "MEGA is a cloud storage and file hosting service that provides end-to-end encryption for your files.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJiRPkwcg8M1Nmfqxq_v--JY_daYB43_JIg&s",
        price: "Free with paid options",
        compatibility: [],
        link: "https://mega.nz/"
    },
  ];
</script>
<div class="main-title">
    <h1>File Hosts & Download Managers</h1>
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
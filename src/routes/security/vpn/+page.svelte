<script>
    import Fa from 'svelte-fa'
	import {} from '@fortawesome/free-solid-svg-icons'
    import { faWindows, faLinux, faApple} from '@fortawesome/free-brands-svg-icons';
    import Cards from '$lib/Cards.svelte';

    const vpnList = [
    {
      title: "Mullvad VPN",
      description: "From the heart of Sweden comes MullvadVPN. An open-source VPN service that focuses on privacy and security, with a no-logs policy.",
      imageUrl: "https://datakonsulten.se/wp-content/uploads/2024/09/1ea9ce8e24738bcd244520ced012a04e_fgraphic.png",
      price: "5€/month",
      compatibility: ['windows', 'linux', 'mac'],
      link: "https://mullvad.net/en/download/vpn/"
    },
];

</script>

<div class="main-title">
    <h1>Security</h1>
</div>
<div class="sub-title">
    <h2>Privacy and integrity is often something that the average surfer overlooks and assumes they already have. That is incorrect. Taking the right measures and doing what's needed to protect yourself online is something few people do. If you go to a website such as <a href="https://www.haveibeenpwned.com" target="_blank">HaveIBeenPWNed</a> and enter an email that you've used, the chance of it having been breached is higher than if it hasnt. </h2>
</div>
    <br>
<div class="sub-title">  
    <h2>Purely as an example, if you live somewhere where democracy is compromised and you try to publish something online, not protecting your virtual identity is stupid. That is just one of the plethora of reasons that people use VPNs, but just like everything else, it's important to know that you're getting the <b>right</b> one. If you search up "best vpns" online you're just going to get the articles bought & paid for by those same VPN companies, who hog your data, engulf themself in your money, and provide a shit service. That is why I've picked Mullvad VPN as my top candidate to recommend. It's fairly priced at 5€ a month, and you can pay for it using crypto, real cash, credit card, any basically any other form of payment that you can imagine.</h2>
</div>

<div class="cards" style="display: flex; gap: 2rem; flex-wrap: nowrap; margin:auto; justify-content:center;">

    <div class="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-3 gap-8 p-8 margin:auto;">
        {#each vpnList as vpn}
          <Cards
            title={vpn.title}
            description={vpn.description}
            imageUrl={vpn.imageUrl}
            price={vpn.price}
            compatibility={vpn.compatibility}
            link={vpn.link}
          />
        {/each}
      </div>
</div>

<div class="sub-title">
  <h2>Thanks for reading!</h2>
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
        font-size: 1.4rem;
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
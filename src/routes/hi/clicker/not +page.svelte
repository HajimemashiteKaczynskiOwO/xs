<script lang="js">
    import { onMount} from 'svelte';
    import {base} from '$app/paths';
    import Clicker from '$lib/Clicker.svelte';
    import {browser} from '$app/environment';


    let clickMultiplier = $state(1); // state because its always updated and shit
    let clickBonus = $state(0); 
    let gemCount = $state(0);
    let isAnimating = $state(true);
    let gem = null;

    let passiveGemsPerSecond = $state(0);
    let lastUpdate = $state(Date.now());
    let clickSound = null; //let the audioelemt thing for it be null and we call it later in onmount with (browser)

    onMount(() => {
        const interval = setInterval(() => {
        const now = Date.now();
        const delta = (now - lastUpdate) / 1000; // sec since last update
        gemCount = Math.round(gemCount + passiveGemsPerSecond * clickMultiplier * delta);
        lastUpdate = now;
    }, 1000);

    if (browser) {
            clickSound = new Audio(`${base}/audio/click.mp3`);
            // we check if we're in browser so we can play it
        }

    return () => clearInterval(interval);

    
    
});

    function incrementGem() {
        console.log("increment")
        const baseGems = 1 + clickBonus;
        const calculatedGems = baseGems * clickMultiplier;
        gemCount += Math.round(calculatedGems);  // Round the result before adding
        isAnimating = false;

        clickSound.currentTime = 0;
        clickSound.play().catch(error => {
            console.log("Audio play failed:", error); //play when you get gem
        });
        setTimeout(() => isAnimating = true, 200);
    };

    const upgrades = [ //just copypaste one and change it a lil thats why similar code for all 
        {
            name: "Coal Collector",
            cost: 50,
            description: "Don't skimp out on that coal, Chud! Extra gem per click.",
            image: "https://preview.redd.it/who-else-loves-coal-v0-z1l6apv4fubc1.png?width=320&crop=smart&auto=webp&s=3a505744cabbad799271fd874e4673288be161c1",
            owned: false,
            effect: () => clickBonus += 1 // Add direct click bonus
        },
        {
            name: "Gemmy Cereal",
            cost: 175,
            description: "Cobson's HWABAG Cereal sure tastes gemmy. Extra 3 gems per click.",
            image: base+"/images/clicker/gemlover.png",
            owned: false,
            effect: () => clickBonus += 2 // Add direct click bonus
        },
        {
            name: "Honey-eating Swede",
            cost: 2000,
            description: "Mmm, honey! Extra 5 gems per click.",
            image: base+"/images/clicker/honeyswede.png",
            owned: false,
            effect: () => clickBonus += 2 // Add direct click bonus
        },
        {
            name: "Peason",
            cost: 4000,
            description: "Peason is a coalcuck, but knows gems. Extra 10 gems per click.",
            image: base+"/images/clicker/peason.png",
            owned: false,
            effect: () => clickBonus += 5 // Add direct click bonus
        },
        // Add more upgrades as needed
    ];

    // Sample Jaks data
    const jaks = $state([
        {
            name: "Mining Jak lv.1",
            cost: 100,
            description: "You mine 10% more gems!",
            image: base+"/images/clicker/miner.png",
            owned: false,
            effect: () => clickMultiplier *= 1.1 // Add multiplier
        },
        {
            name: "Mining Jak lv.2",
            cost: 200,
            description: "You mine 15% more gems!",
            image: base+"/images/clicker/miner2.png",
            owned: false,
            effect: () => clickMultiplier *= 1.2 // Add multiplier
        },
        {
            name: "Mining Jak lv.3",
            cost: 300,
            description: "You mine 30% more gems!",
            image: base+"/images/clicker/miner3.png",
            owned: false,
            effect: () => clickMultiplier *= 1.30 // Add multiplier
        },
        {
            name: "Cobzon Prime Gemmy Delivery",
            cost: 2500,
            description: "Doubles your mined gems.",
            image: base+"/images/clicker/cobzon.png",
            owned: false,
            effect: () => clickMultiplier *= 2.0 // Add multiplier
        },
        {
            name: "Huangdijak",
            cost: 5000,
            description: "The Emperor's interest in young Jaks is well known. Gem rate increases threefold!",
            image: base+"/images/clicker/ancient.png",
            owned: false,
            effect: () => clickMultiplier *= 3.0 // Add multiplier
        }
        // Add more Jaks as needed
    ]);

    const passiveUpgrades = [
    {
        name: "Gemmy Driller",
        cost: 2500,
        description: "Automatically mines 2 gems/second",
        image: base+"/images/clicker/drilljak.png",
        owned: false,
        rate: 2
    },
    {
        name: "Forklift Babyjak",
        cost: 12500,
        description: "Forklifts 10 gems/second",
        image: base+"/images/clicker/fork.png",
        owned: false,
        rate: 10
    },
    {
        name: "CALMJAK",
        cost: 5000000,
        description: "Magnum Opus of the game. Buy this, and you've beat it. 100K gems/second.",
        image: base+"/images/clicker/calmjak.gif",
        owned: false,
        rate: 100000,
    }
];

    function buyItem(item, type) {
    // prevent purchase if jak is already owned
    if (type === 'jak' && item.owned) return;
    

        if (gemCount >= item.cost) {
            gemCount -= item.cost;
            
            //  Jaks
            if (type === 'jak') {
                item.owned = true;
                item.effect();
            }
            
            //  Click Upgrades
            if (type === 'upgrade') {
                item.cost = Math.round(item.cost * 1.15);
                item.effect();
            }
            
            //Pasive Upgrades
            if (type === 'passive') {
                item.cost = Math.round(item.cost * 1.2);
                passiveGemsPerSecond += item.rate;
            }
        }
}
    
</script>

<head>
    <title>SoyClicker</title>
</head>
{#if browser}
    <audio autoplay loop>
        <source src="{base}/audio/victory.mp3" type="audio/mpeg" id="bg">
    </audio>
{/if}

<main>
    <section>
        <div class="main">
            <div class="left">
                <h1 class="textHeader">Jaks</h1>

                <div class="items-grid">
                    {#each jaks as jak (jak.name)}
                    <div 
                        class="item-card {gemCount < jak.cost ? 'unaffordable' : ''}"
                        on:click={() => buyItem(jak, 'jak')}
                    >
                        <img src={jak.image} alt={jak.name} class="item-image" />
                        <div class="item-info">
                            <h3>{jak.name}</h3>
                            <div class="cost-badge">
                                {jak.owned ? 'OWNED!' : `Cost: ${jak.cost} gems`}
                            </div>
                        </div>
                        <div class="item-description">
                            {jak.description}
                        </div>
                    </div>
                {/each}
                </div>
            </div>
            

                <div class="middle">
                    <h3 style="font-size:3rem;">Gems: {gemCount.toFixed(0)}<span id="gem-cost"></span></h3>
                    <h4>Gems per click : {((1 + clickBonus) * clickMultiplier).toFixed(0)}</h4>
                    <h4>Multiplier: {(clickMultiplier).toFixed(2)}</h4>
                    <h4>Passive: {(passiveGemsPerSecond * clickMultiplier).toFixed(0)}/sec</h4>
                        <img src="images/gem.png" class="gemimg {isAnimating ? 'animate' : ''}" alt="gem" on:click={() => incrementGem()} />
                </div>
            
            
            <div class="right">
                <h1 class="textHeader">Upgrades</h1>
                <div class="items-grid">
                    {#each upgrades as upgrade (upgrade.name)}
                    <div 
                        class="item-card {gemCount < upgrade.cost ? 'unaffordable' : ''}"
                        on:click={() => buyItem(upgrade, 'upgrade')}
                    >
                        <img src={upgrade.image} alt={upgrade.name} class="item-image" />
                        <div class="item-info">
                            <h3>{upgrade.name}</h3>
                            <div class="cost-badge">
                                {`Cost: ${upgrade.cost} gems`}
                            </div>
                        </div>
                        <div class="item-description">
                            {upgrade.description}
                        </div>
                    </div>
                {/each}
                </div>
                 <div class="items-grid">

        {#each passiveUpgrades as passive (passive.name)}
    <div 
        class="item-card {gemCount < passive.cost || passive.owned ? 'unaffordable' : ''}"
        on:click={() => buyItem(passive, 'passive')}
    >
        <!-- Add image -->
        <img src={passive.image} alt={passive.name} class="item-image" />
        <div class="item-info">
            <h3>{passive.name}</h3>
            <div class="cost-badge">
                {passive.owned ? 'OWNED' : `Cost: ${passive.cost} gems`}
            </div>
        </div>
        <!-- Add description -->
        <div class="item-description">
            {passive.description}
        </div>
    </div>
        {/each}
    </div>
            </div>
        </div>
    </section>
</main>

<style>

    main {
        display:grid;
        place-items: center;
        margin:0;
        padding:0;
        background-color:white;
        overflow: hidden; /* dis global scrolling */
    height: 100%;
    }
    .right {
        background-color: rgb(228, 228, 228);
        color: green;
        height: 100vh;
        width:100%;
        text-align: center;
        font-size: 1.5rem;
        overflow-y:auto;
    }
    .left {
        background-color: rgb(228, 228, 228);
        color: green;
        height: 100vh;
        width:100%;
        text-align: center;
        font-size: 1.5rem;
        overflow-y:auto;
    }
    .main {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-content: center;
        align-items: center;
        color:black;
        width:100vw;
        overflow:hidden;
        min-height:100vh;
    }
    .textHeader {
        font-size: 2.1rem;
        margin: 1rem 0;
        text-align: center;
        color: rgb(21, 255, 0);
        text-shadow: 0px 0px 5px rgba(0,255,0,1);
    }
    .middle {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: black;
        text-align: center;
        margin-bottom: 1rem;
    }
    .gemimg {
        width: 400px;
        height: 400px;
        transition: transform 0.05s ease;
    }
    .gemimg.animate {
    animation: pulse 2s infinite;
    animation-delay: 0.05s;
}
    .gemimg:hover {
        cursor: pointer;
        transform: scale(1.03);
        transition: transform 0.05s ease;
    }
    .gemimg:active {
        transform: scale(0.85);
        transition: transform 0.05s ease;
    }
    .items-grid {
        display: grid;
        gap: 1rem;
        padding: 1rem;
        overflow-y: visible;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .item-card:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }

    .item-card:hover .item-description {
        opacity: 1;
        transform: translateY(0);
    }

    .item-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .item-info {
        padding: 0.5rem;
        text-align: center;
    }

    .item-description {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 1rem;
        opacity: 0;
        transform: translateY(-10%);
        transition: all 0.3s ease;
    }

    .cost-badge {
        background: #4CAF50;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
    .unaffordable {
        background-color: #ffcccc !important;
        filter: grayscale(0.8);
    }
    
    .item-card {
        transition: background-color 0.3s ease, transform 0.2s ease;
        position: relative;
        z-index: 1;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease;
        font-size:1rem;
        border-width: 2px;
    }
    
    .cost-badge {
        transition: background-color 0.3s ease;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
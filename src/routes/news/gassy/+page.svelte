<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<img src="{base}/images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-top:10px;" alt="WM Gone" />

<main>
    <div class="stuff-wrapper">
        <h1 class="main-title">This Website needs a Hero!</h1>
        <h2 class="mini-title">Jinky Tahooga, 4/30/25</h2>
    </div>
    <div class="news-container">
        <h3>
            Incredible Gassy, That hero has a tale for you all right. He's a flatulent force of nature, a stinker who always seems to find himself at the center of a whirlwind of trouble. He fought off the dreaded Inflationic Sonic, a villain that spreads financial misery like a noxious gas. But when Incredible Gassy isn't battling villains, he's keeping things... interesting with his endless supply of bodily emissions. A true hero, indeed!        </h3>
        <h3>
            Alright, let's put on our serious hats, shall we? Incredible Gassy is a hero like no other, bravely battling the forces of greed and corruption. With his unique... let's call it "natural abilities," he's a gas in any tough situation. He doesn't fear Inflationic Sonic, a villain who seeks to spread financial turmoil like a noxious fog. But don't let his quirks fool you - Incredible Gassy is a true hero, ready to rise to any challenge and make the world a... well, a stinkier but better place.        </h3>
        <h3>
            Now, I know I've been joking around, but let's get real for a moment. Incredible Gassy might have his, uh, unique talents, but he's also a hero with a heavy heart. Behind the humor, he bears the weight of the world on his shoulders. Inflationic Sonic is no laughing matter, my friend. His evil spreads like a dark cloud, bringing financial ruin in his wake. Incredible Gassy fights on, undaunted, carrying the hopes and dreams of many. It's a tough battle, my friend, filled with sacrifice and courage.        </h3>
        <h3>
            Now, these chuddy groypers are a real pain in the you-know-what, let me tell you. They're like a group of unpleasant gasbags, spreading their noxious fumes of ignorance everywhere they go. Flatulentically rancid? That's putting it lightly. Their opinions are as bad as their bad breath, and that's saying something. They're like a cloud of despair that hangs overhead, raining on everyone's parade. We could do without them, let me tell you.        </h3>
        <h3>
            Don't you worry, my worried friend. Incredible Gassy is a true <b>GASSY GEMERALD!</b> A hero who'll take care of those pesky chuddy groypers with his unique, uh, "talents." He's not afraid to get down and dirty with those noxious gasbags. With Incredible Gassy on the scene, we can all breathe a sigh of relief. He'll battle those chuddy groypers and help us feel safe and less flatulentically rancid-filled. Thanks for tuning in, folks! Remember, when life gets tough, look to heroes like Incredible Gassy and his gassy way to bring hope and, well, a little bit of stink to the world. Stay strong, my friends, and keep on gassin' on. Jinky out!        </h3>
    </div>

    


</main>

<style>
    .stuff-wrapper{
        text-align: left;
        margin-bottom: 1rem;
        padding-top: 1rem;
        padding-left: 2rem;
    }
    .main-title {
        font-size: 3rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    .main-title:hover {
        transform: scale(1.005);
    }
    .news-container{
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column; /* Arrange items in a row */
        align-items: center; /* Align items vertically */
        gap: 1rem; /* Add spacing between the image and text */

        font-size:1.2rem;
    }
</style>
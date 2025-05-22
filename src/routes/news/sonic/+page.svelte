<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<img src="{base}/images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-top:10px;" alt="WM Gone" />

<main>
    <div class="stuff-wrapper">
        <h1 class="main-title">Sonic Inflation Affects Us all.</h1>
        <h2 class="mini-title">Jinky Tahooga, 4/23/2025</h2>
    </div>
    <div class="news-container">
        <h3>
            Oh, it's simply smashing, I tell ya! The super sonic inflation has really done a rumba on the economy, and by golly, it's even turned the world's geometry upside down. It's like trying to dance with a wobbly partner, you know? Just when you think you've got your step right, bam! Inflation hits you like a ton of bricks. Can I get a yeehaw for our twisted financial state?        </h3>
        <h3>
            That super sonic inflation is like a bull in a china shop, I'm tellin' ya. It's causing our finances to do the jitterbug! And the geometry, oh Lordy, it's more warped than a rollercoaster after it's had a few too many beers! We're talkin' economic acrobatics here, folks! Just when we think we've got all our ducks in a row, inflation comes in like a tornado, tossing everything up in the air. Yeehaw indeed!        </h3>
        <h3>
            My, hasn't super sonic inflation thrown a spanner in the works, hasn't it? This economic turmoil has caused not only financial upheaval but has left the geometry of our world in a state of disarray. One can liken the situation to a drunken tango, with the partners stumbling over each other, never quite aligning in perfect sync. It's as if the delicate balance of the universe has been upset, and we're all left trying to pick up the pieces like a game of economic Jenga.        </h3>
        <h3>
            Well, let me tell you, sonic inflation is like a whirlwind of numbers gone haywire! It's like a tornado of cash, spinning around and wreaking havoc on our financial stability. It's like trying to keep a balloon from floating away, but the helium is sonic inflation, and the string is our economy.         </h3>
        <h3>
            Oh, you want the lowdown on recent economic disasters, eh? Well, let me spill the beans. We've had bank collapses, stock market crashes, bursting asset bubbles, sovereign debt crises, and, of course, that pesky super sonic inflation I mentioned earlier. It's like a rollercoaster ride full of financial jolts, I'm tellin' ya. You never know when the next twist is gonna come and send your savings down the drain. Better hold on tight, partner!        </h3>
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
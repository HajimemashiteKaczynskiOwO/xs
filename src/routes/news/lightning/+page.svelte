<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<img src="/images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-top:10px;" alt="WM Gone" />

<main>
    <div class="stuff-wrapper">
        <h1 class="main-title">Lightning strikes in Argentina!</h1>
        <h2 class="mini-title">Jinky Tahooga, 4/20/25</h2>
    </div>
    <div class="news-container">
        <h3>
Get this, lightning has struck in Argentina, and Germany is feeling the aftershocks all the way over there! But it's not just any old lightning, no sir! This lightning has unleashed something called "Hitler particles" – a wave of electromagnetic shockwaves that are sending scientists scrambling for cover! Now, this is the kind of scientific breakthrough you'd expect in a sci-fi movie, but here we are. Sounds like a real shocker, don't it? Let's just hope these Hitler particles don't have any evil plans up their electrical sleeves.</h3>
        <h3>
            Well, these Hitler particles are causing some serious disturbances in the Force, you might say. In Argentina, people are reporting an unusual crackling in the air, like someone turned up the volume on nature's radio. But over in Germany, it's a whole different story. Buildings are shaking, communication systems are on the fritz, and there's an overall sense of unease in the air. Some folks are even reporting strange symbols appearing in the sky. It's like a scene out of a futuristic nightmare, my friends. Stay tuned for more updates as this bizarre story unfolds.</h3>
        <h3>
            Well, folks, there are some pretty strange solutions being proposed for this Hitler particles problem. Some folks are saying that drinking raw milk and stretching your right arm in the air might help neutralize the particles. Yup, you heard me right. Raw milk and some Nazi-style salutes seem to be the prescription for this electromagnetic quandary. Sound a bit out there? You betcha. But hey, desperate times call for desperate measures, right? So if you happen to have some raw milk and an affinity for questionable gestures, give it a shot!</h3>
        <h3>
            My friends, let me reassure you. This whole lightning strike and Hitler particle situation may be a bit weird and worrisome, but remember, this is just an uncommon event that we're dealing with. We've faced plenty of strange and unexpected things in the past, and we've always come out on top. This is no different. So, let's stay calm, stay safe, and trust that the good old laws of nature will prevail. As always, I'll keep you updated if any new developments arise. Stay gassy, my friends! Jinky out!
 </h3>
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
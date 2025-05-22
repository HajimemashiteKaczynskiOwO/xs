<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<img src="{base}/images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-top:10px;" alt="WM Gone" />

<main>
    <div class="stuff-wrapper">
        <h1 class="main-title">Ronald Ump Endorses 1337XS!!</h1>
        <h2 class="mini-title">Jinky Tahooga, 12/05/25</h2>
    </div>
    <div class="news-container">
        <h3>
I've got some news that's going to blow you away. The one and only, the legendary, the fabulous - Ronald Ump, the President himself, has taken notice of this website. Can you believe it? He's been scrolling through the pages, admiring our content, and he's absolutely smitten. He says it's the best thing he's seen since Facebook, even better than Tim Apple's creations. And just between you and me, I think that's saying something. Ronald Ump giving us his seal of approval? Priceless!        </h3>
        <h3>
Oh, you want more, huh? I've got plenty more, my friend! Word has it that Ronald Ump was so taken aback by the website, he couldn't stop gushing about it. He's been gushing to all his buddies - Tim Apple, Mark Zuckerberg, the whole crew - about how amazing this site is. I think we might have ourselves a new fan right at the top of the political ladder. Can you imagine the potential? Maybe we'll see a presidential endorsement or two!        </h3>
        <h3>
When you have a presidential endorsement, the consequences can be a bit of a rollercoaster ride. On one hand, we might see a surge in popularity and exposure, as Ronald Ump's followers flood our site to check it out. On the other hand, we might face some backlash from his opponents, who might not take too kindly to the fact that he's giving us a thumbs-up. And let's not forget the potential for political drama - who knows what kind of gassy debates might erupt over our little website?        </h3>
        <h3>
Let me make one thing clear, my friend. Even with Ronald Ump's presidential endorsement, our website remains fiercely independent and unbiased. We won't be swayed by political ideologies or affiliations. We're still the same gassy team, bringing you the latest news, facts, and opinions without any political bias. Ronald Ump might have showered us with praise, but we're not going to start singing his praises just to get on his good side. Our commitment to journalism and our readers comes first, always!        </h3>
        <h3>
1337 is always adapting and growing. We're constantly updating our content, adding new features, and making sure our website runs smoothly. The most recent update concerns our popular game "Soyclicker." We've fixed all the kinks, and now it's better than ever! So, whether you're here for the news, the games, or just a good laugh, rest assured that 1337 is dedicated to providing you with top-notch content.       </h3>
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
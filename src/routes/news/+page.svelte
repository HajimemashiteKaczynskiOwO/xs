<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<main>
    <div>
        <img src="images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-bottom:10px;" alt="WM Gone" />
    </div>
    <div class="news-card"> 
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fmarketplace%2Fpresentation_assets%2F002%2F146%2F070%2Flarge%2Ffile.jpg%3F1667947295&f=1&nofb=1&ipt=d562493e52fba901888a9cc0833f504c93cc8adf5c481e5e61ef3b0d063240fb" style="margin:auto; width:400px; height:250px;" alt="Build" />
        <div class="feature-card-content">
        <a href="{base}/news/ronald"><b><h1 class="sub-title">Ronald Ump Endorses 1337XS!</h1></b></a>
    </div></div>
    <div class="news-card">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fm%2F1oKtc4TRFBwAAAAC%2Fincredible-gassy-the-incredibles.gif&f=1&nofb=1&ipt=b69db1918d7c84fe8dd6664caef86a59d8e8c98ad6fc366f6481f3b195010f28" style="margin:auto; width:400px; height:250px;" alt="Build" />
        <div class="feature-card-content">
        <a href="{base}/news/gassy"><b><h1 class="sub-title">This News page needs a hero!</h1></b></a>
    </div></div>
    <div class="news-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKATTPGik9NLmU7ER-DkHxJTXMRgwrCtUBQ&shttps://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72fd7d3d-e015-47bd-a531-064e3d24660d/dfondw6-c8c6ebdb-cf18-4c91-aa53-80fd5fb6eea9.jpg/v1/fill/w_1062,h_752,q_70,strp/commission__sonic_the_hedgehog_inflation_by_immanuellalissa_dfondw6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA3IiwicGF0aCI6IlwvZlwvNzJmZDdkM2QtZTAxNS00N2JkLWE1MzEtMDY0ZTNkMjQ2NjBkXC9kZm9uZHc2LWM4YzZlYmRiLWNmMTgtNGM5MS1hYTUzLTgwZmQ1ZmI2ZWVhOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.857rpvRTfIPWXqoBLoKjThg54u32JhMeRqFgdjFqjZk" style="margin:auto; width:400px; height:250px;" alt="Build" />
        <div class="feature-card-content">
        <a href="{base}/news/sonic"><b><h1 class="sub-title">Sonic Inflation Affects Us all.</h1></b></a>
    </div></div>
    <div class="news-card">
        <img src="https://preview.redd.it/this-thread-needs-a-hero-v0-uiyrisafs9rb1.jpeg?width=640&crop=smart&auto=webp&s=4c7734c0c19482d7c5dbaea551163ae98472070c" style="margin:auto; width:400px; height:250px;" alt="Build" />
        <div class="feature-card-content">
        <a href="{base}/news/lightning"><b><h1 class="sub-title">Lightning strikes in Argentina!</h1></b></a>
    </div></div>

    <div class="feature-card">
        <img src="images/jinky.jpg" style="margin:auto; width:300px; height:300px;" alt="Jinky" />
        <div class="feature-card-content">
            <h2>Jinky Tahooga</h2>
            <h3>1337XS' Renowned Author, Editor, and Creator</h3>
            <p>Well, hello there, folks! I'm Jinky Tahooga, and I'm here to bring you all the latest news and happenings in the world with a side of cheer and enthusiasm. Whether it's a local event or a major news story, I'll be here to report it with a smile and a yippity attitude. So buckle up, folks, because you're in for a wild ride with me, Jinky Tahooga, your enthusiastic news anchor!</p>
        </div>
    </div>
</main>

<style>
    main {
        min-height: 100vh; /* Ensure full viewport height */
        display: flex;
        flex-direction: column;
        align-items: center; /* Horizontal center */
        padding: 2rem;
    }

    .sub-title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
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
        display: flex;
        flex-direction: row; /* Arrange items in a row */
        align-items: center; /* Align items vertically */
        gap: 1rem; /* Add spacing between the image and text */
    }
    .feature-card img {
        width: 200px; /* Reduced from 300px */
        height: 200px; /* Reduced from 300px */
        border-radius: 10px;
        object-fit: cover; /* Ensure image keeps aspect ratio */
    }

    .feature-card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1; /* Allow content to fill remaining space */
        max-width: 500px; /* Limit text container width */
    }

    .feature-card h2 {
        font-size: 1.8rem;
        margin: 0;
        color: #fff;
    }

    .feature-card h3 {
        font-size: 1.4rem;
        margin: 0.5rem 0 0;
        color: #ccc;
    }
    .news-card{
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: row; /* Arrange items in a row */
        align-items: center; /* Align items vertically */
        gap: 1rem; /* Add spacing between the image and text */
    }
    
</style>

<script>
    import { base } from '$app/paths';
</script><main>
    <div class="main-title">
        <h1>Games + Fun Stuff</h1>
    </div>
<div class="feature-card">
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://pbs.twimg.com/media/GQrtMy8a4AAyWqT.jpg"
            alt="VPN's"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">EaglerCraft</h2>
          <p>Play Minecraft 1.8 / 1.12.2 - Online!</p>
          <div class="card-actions"><a href="https://eaglercraft.com/" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://sm.pcmag.com/pcmag_me/review/i/itchio/itchio_79mj.jpg"
            alt="VPN's"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Itch.io Games</h2>
          <p>Fun games to play on your browser / download!</p>
          <div class="card-actions"><a href="/downloads/itch/">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
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

    .main-title {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    .main-title:hover {
        transform: scale(1.015);
    }
    .feature-card {
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        justify-content: center;
        flex-wrap: wrap;

        gap: 0.1rem;
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
</style>

<script>
    import { base } from '$app/paths';
</script>
<head>
  <title>1337XS - Downloads</title>
</head>
<main>
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
          <div class="card-actions"><a href="{base}/downloads/itch/">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://play-lh.googleusercontent.com/QDQYpVJx4oMCP-43KXlz9YoryzOmqJQIoU8TbuzvVGeCcqaywF1wsnzofLZIqDpuhw=w3840-h2160-rw"
            alt="Dan-Ball"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Dan-Ball</h2>
          <p>Physics-based games (very fun) to play on your browser!</p>
          <div class="card-actions"><a href="https://dan-ball.jp/en/" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://images.crazygames.com/openguessr_16x9/20250423032721/openguessr_16x9-cover?auto=format,compress&q=75&cs=strip"
            alt="Dan-Ball"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">OpenGuessr</h2>
          <p>Free Geoguessr alternative that you can play on your browser.</p>
          <div class="card-actions"><a href="https://openguessr.com/" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://cdn.prod.website-files.com/625b3532f780c60cd55b861f/65e34028e7f527eaa6282f65_Screenshot%202024-03-02%20at%208.30.07%20PM.png"
            alt="Dan-Ball"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Neal</h2>
          <p>Fun online games and pages.</p>
          <div class="card-actions"><a href="https://neal.fun/" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://i.ytimg.com/vi/nzPqukM84QY/maxresdefault.jpg"
            alt="Dan-Ball"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">JKLM</h2>
          <p>Multiplayer online minigames such as BombParty or Popsauce.</p>
          <div class="card-actions"><a href="https://jklm.fun/" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://imgs.crazygames.com/games/slitherio/cover-1587331280441.png?metadata=none&quality=40&width=1200&height=630&fit=crop"
            alt="Slither"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Slither</h2>
          <p>Be a snake, eat balls!</p>
          <div class="card-actions"><a href="https://www.slither.io" target="_blank">
            <button class="btn btn-primary">Visit Website</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://e.snmc.io/lk/lv/x/0ae3b7bc9919c39ee5b44c34a44035b4/9223000"
            alt="Garlic"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Gartic Phone</h2>
          <p>Fun drawing-related party games online.</p>
          <div class="card-actions"><a href="https://garticphone.com/" target="_blank">
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
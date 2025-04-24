<main>
    <div class="main-title">
        <h1>Security + Resources</h1>
    </div>
<div class="feature-card">
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://mullvad.net/press/MullvadVPN_logo_Landscape_RGB_Color_negative.png"
            alt="VPN's"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">VPN's</h2>
          <p>VPN's with the highest priority of security, no logs, and not overly expensive.</p>
          <div class="card-actions">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://feriman.com/media/posts/88/install-qbittorrent-on-Raspberry-Pi-2.png"
            alt="Torrents"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Torrent Clients</h2>
          <p>Lightweight, secure, and fast Torrent Clients.</p>
          <div class="card-actions">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Browsers"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Browsers</h2>
          <p>Privacy-focused browsers</p>
          <div class="card-actions">
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
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
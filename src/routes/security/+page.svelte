
<script>
    import { base } from '$app/paths'; 
</script><main>
    <div class="main-title">
        <h1>Security + Resources</h1>
    </div>
<div class="feature-card">
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/locktools.png"
            alt="VPN's"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Security</h2>
          <p>Little infodump about VPN's, distros and other security measures.</p>
          <div class="card-actions"><a href="{base}/security/vpn">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/torrentools.png"
            alt="Torrents"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Torrent Clients</h2>
          <p>Lightweight, secure, and fast Torrent Clients.</p>
          <div class="card-actions"><a href="{base}/security/torrent">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/webtools.png"
            alt="Browsers"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Browsers</h2>
          <p>Privacy-focused browsers</p>
          <div class="card-actions"><a href="{base}/security/browsers">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/linuxtools.png"
            alt="OS's"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Operating Systems</h2>
          <p>Linux-based operating systems with a focus on privacy, integrity, and efficiency.</p>
          <div class="card-actions"><a href="{base}/security/distros">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/softwaretools.png"
            alt="Softwares"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Software</h2>
          <p>Useful software that can aid you.</p>
          <div class="card-actions"><a href="{base}/security/software">
            <button class="btn btn-primary">Learn More</button></a>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="{base}/images/downloadtools.png"
            alt="File Hosts"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">File Hosts & Download Managers</h2>
          <p>Fast, free, and anonymous file hosts with quick and efficient download managers.</p>
          <div class="card-actions"><a href="{base}/security/fhosts">
            <button class="btn btn-primary">Learn More</button></a>
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
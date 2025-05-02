<script>
    import { Fa } from 'svelte-fa';
    import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
    import { faWindowMaximize, faDownload} from '@fortawesome/free-solid-svg-icons';
    export let title = "Default Title";
    export let description = "Default description text";
    export let imageUrl = "https://via.placeholder.com/400x300";
    export let price = "Completely Free";
    export let compatibility = ['web', 'download', 'mac'];
    export let link = "#";
  </script>
  
  <div class="flex flex-col max-w-sm">
    <div class="flex flex-col gap-2 p-4 bg-base-200 rounded-t-box">
      <h1 class="font-bold text-xl">{title}</h1>
      <span>{description}</span>
    </div>
  
    <!-- Image -->
    <img src={imageUrl} alt={title} class="img-cover img-center w-100 h-55" />
  
    <!-- Bottom Section -->
    <div class="flex justify-between bg-neutral text-neutral-content p-4 rounded-b-box flex-row gap-2">
      <span class="font-bold text-xl">{price}</span>
      
      <div class="compat" style="display: flex; gap: 0.05rem; transform: scale(1.75); margin:auto;">
        {#each compatibility as os}
          {#if os === 'web'}<Fa icon={faWindowMaximize} />{/if}
          {#if os === 'download'}<Fa icon={faDownload} />{/if}
          {#if os === 'mac'}<Fa icon={faApple} />{/if}
        {/each}
      </div>
  
      <a href={link} class="btn btn-primary btn-md" target="_blank">Play</a>
    </div>
  </div>
<script>
    import { Fa } from 'svelte-fa';
    import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
    import { faWindowMaximize, faDownload} from '@fortawesome/free-solid-svg-icons';
    export let title = "Default Title";
    export let description = "Default description text";
    export let imageUrl = "https://via.placeholder.com/400x300";
    export let link = "#";
  </script>
  
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure class="px-10 pt-10">
      <img
        src={imageUrl}
        alt={title}
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <div class="card-actions">
        <a href={link} class="btn btn-primary" target="_blank">Go to</a> 
      </div>
    </div>
  </div>
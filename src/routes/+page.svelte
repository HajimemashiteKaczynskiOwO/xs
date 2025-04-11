<script>
    import Fa from 'svelte-fa'
	import { faFlag, faRocket, faUsers, faFire, faQuestionCircle, faLock, faDownload, faMousePointer, faList } from '@fortawesome/free-solid-svg-icons'
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>
<head>
    <title>1337XS - It's Great!</title>
</head>
<main>
    <div class="main-header">
        <h1>Welcome to 1337XS! Watch this video ↓ </h1>
    </div>
    <div class="video-container">
        <iframe width="640" height="360" src="videos/jinky.mp4" frameborder="0" allowfullscreen></iframe>
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

    .main-header {
        width: 100%;
        max-width: 1200px; /* Optional: limit header width */
        text-align: center;
        padding: 1rem 0;
        position: sticky;
        top: 0;
        
        /* Optional styling */
        background-color: rgb(rgb(87, 17, 113), 22, 22); /* or use bg-base-100 with DaisyUI */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* subtle shadow */
        z-index: 10; /* ensure header stays above content */
    }
</style>
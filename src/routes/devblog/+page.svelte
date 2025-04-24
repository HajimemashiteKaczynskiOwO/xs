<script>
	export let data;
    import { base } from '$app/paths';
</script>
<div class="main-title">
<h1>Devblog</h1>
</div>

<ul>
	{#each data.posts as post}
		<li class="sub-title">
			<a href="{base}/devblog/{post.slug}">
				{post.title} — {post.date}
			</a>
		</li>
	{/each}
</ul>


<style>


    main {
        min-height: 100vh;
        color: #ffffff;
        padding: 2rem;
    }

    .content-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 2rem;
        max-width: 1400px;
        margin: 0 auto;
    }

    .main-title {
        font-size: 4rem;
        text-align: center;
        margin-bottom: 1rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .main-title:hover {
        transform: scale(1.015);
    }

    .sub-title {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        opacity: 0.9;
        transition: all 0.3s ease;
		color:light;
    }

    .sub-title:hover {
        transform: scale(1.05);
        opacity: 1;
		color:white;
    }

    .mini-title {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 1rem;
        color: #ccc;
        transition: all 0.3s ease;
    }
    .mini-title:hover {
        transform: scale(1.1);
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .side-column {
        padding: 1rem;
    }

    .feature-card {
        padding: 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
    }


    @media (max-width: 1024px) {
        .content-wrapper {
            grid-template-columns: 1fr;
        }
        
        .side-column {
            display: none;
        }
    }
</style>
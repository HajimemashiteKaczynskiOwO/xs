<main>
	<nav class="navbar sticky top-0 z-50 bg-base-300 justify-between transition-all duration-300 shadow-md">
	   <!-- Logo -->
	   <a class="btn btn-ghost text-lg" href="/#">
		   <img alt="Logo" src="/images/crossyour.png" class="w-4" />
		   1337XS 
	   </a>

	   <!-- Menu for mobile WORK ON HTIS LATER -->
	   <div class="dropdown dropdown-end sm:hidden">
		   <button class="btn btn-ghost">
			   <i class="fa-solid fa-bars text-lg"></i>
		   </button>
   
		   <ul tabindex="0" class="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2">
			   <li><a href="/about">About</a></li>
			   <li><a href="/faq">FAQ</a></li>
			   <li>
				   <h2 class="menu-title">Features</h2>
				   <ul>
					   <li><a href="/security">Tech tools</a></li>
					   <li><a href="/downloads">Podcast</a></li>
					   <li><a href="/clicker">Community</a></li>
				   </ul>
			   </li>
			   <a class="btn btn-primary btn-sm" href="/extras">
				   <Fa icon={faRocket} />
				   Extras
			   </a>
		   </ul>
	   </div>
   
	   <!-- Menu for desktop -->
	   <div class="hidden sm:flex gap-2">
		   <a class="btn btn-ghost btn-sm" href="/about">
			   <Fa icon={faQuestionCircle} />
			   About
		   </a>
		   <a class="btn btn-ghost btn-sm" href="/faq">
			<Fa icon={faUsers} />
			   FAQ
		   </a>
		   
		   <a class="btn btn-ghost btn-sm" href="/about">
			<Fa icon={faList} />
			   Devblog
		   </a>
   
		   <!-- Dropdown menu -->
		   <div class="dropdown dropdown-end">
			   <button class="btn btn-ghost btn-sm"> 
				<Fa icon={faFire} />
				   Resources
				   <i class="fa-solid fa-chevron-down"></i>
			   </button>
   
			   <ul tabindex="0" class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
				   <li><a href="/security"><Fa icon={faLock} />Security</a></li>
				   <li><a href="/downloads"><Fa icon={faDownload} />Downloads</a></li>
				   <li><a href="/clicker"><Fa icon={faMousePointer} />Click TBA</a></li>
			   </ul>
		   </div>
		   
   
		   <a class="btn btn-primary btn-sm" href="/extras">
			   <Fa icon={faRocket} />
			   Extras
		   </a>
	   </div>
	   
   </nav>
</main>

<script>
	import Fa from 'svelte-fa'
	import { faFlag, faRocket, faUsers, faFire, faQuestionCircle, faLock, faDownload, faMousePointer, faList } from '@fortawesome/free-solid-svg-icons'
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import '../app.css';
	

	let { children } = $props();

</script>

{@render children()}

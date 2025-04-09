<script lang="ts">
	import { Home, ListMusic, Search, type Icon as IconType } from 'lucide-svelte';
	// Import the Icon type given to us by lucide-svelte and name is AS IconType to avoid confusion
	import { page } from '$app/stores';
	import logo from '$assets/Spotify_Logo_RGB_White.png';
	export let desktop: boolean;

	const menuItems: { path: string; label: string; icon: typeof IconType }[] = [
		{ path: '/', label: 'Home', icon: Home },
		{ path: '/search', label: 'Search', icon: Search },
		{ path: '/playlists', label: 'Playlists', icon: ListMusic }
	];
</script>

<div class="nav-content" class:desktop class:mobile={!desktop}>
	<!-- Shorthand from Svelte - Add the class desktop if the desktop variable is truthy, and add the class mobile if it's falsy. -->
	<nav aria-label="Main navigation">
		<!-- aria-label used to assist with screen reader -->
		<div class="nav-content-inner">
			<img src={logo} alt="Spotify Logo" class="logo" />
			<ul>
				{#each menuItems as item}
					<li class:active={item.path === $page.url.pathname}>
						<a href={item.path}>
							<svelte:component
								this={item.icon}
								focusable="false"
								aria-hidden="true"
								color="var(--text-color)"
								size={26}
								strokeWidth={2}
							/>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
	<h1>Navigation</h1>
</div>

<style lang="scss">
	.logo {
		width: 170px;
		max-width: 100%;
		margin-bottom: 30px;
	}
</style>

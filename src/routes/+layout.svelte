<script lang="ts">
	import { LogoutButton } from '$components';
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import type { LayoutData } from './$types';

	// SvelteKit passes data from your layout/page load() function as a prop.
	// You don't need to manually import it — just declare it like a normal prop.
	export let data: LayoutData;

	// Automatically update `user` whenever `data.user` changes
	$: user = data.user;
</script>

{#if user}
	<p>Hello {user.display_name}</p>
	<LogoutButton></LogoutButton>
{/if}

<slot />
<!--
This is a layout component.
It wraps all child pages and uses <slot /> to render them inside.
Useful for shared UI like headers, navbars, or auth logic.
-->

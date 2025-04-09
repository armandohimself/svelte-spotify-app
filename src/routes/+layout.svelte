<script lang="ts">
	import { Navigation } from '$components';
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import type { LayoutData } from './$types';

	// SvelteKit passes data from your layout/page load() function as a prop.
	// You don't need to manually import it — just declare it like a normal prop.
	export let data: LayoutData;

	// Automatically update `user` whenever `data.user` changes
	$: user = data.user;
</script>

<div id="main">
	{#if user}
		<div id="sidebar">
			<Navigation desktop={true} />
		</div>
	{/if}
	<div id="content">
		<div id="main-content">
			<slot />
		</div>
	</div>
</div>

<!--
This is a layout component.
It wraps all child pages and uses <slot /> to render them inside.
Useful for shared UI like headers, navbars, or auth logic.
-->

<style lang="scss">
	* {
		outline: 1px solid red;
	}
	#main {
		display: flex;
		#content {
			flex: 1;
			main#main-content {
				padding: 30px 15px 60px;
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
			}
		}
	}
</style>

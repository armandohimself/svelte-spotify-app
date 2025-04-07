<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import type { LayoutData } from './$types';

	/**
	 * SvelteKit automatically injects that data from the load() function into your layout/page component.
	 * No need to import data — it’s passed in as a prop, just like how React passes props into components.
	 */
	// Prop named data is expected and should be matched in the LayoutLoad type
	export let data: LayoutData;
</script>

{data.user?.email}
{data.user?.display_name}

<!-- Placeholder that tells Svelte to render whatever child page or layout goes here -->
<slot />

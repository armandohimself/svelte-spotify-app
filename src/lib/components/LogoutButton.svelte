<script>
	import { invalidateAll } from '$app/navigation';
</script>

<form
	method="POST"
	action="/api/auth/logout"
	on:submit|preventDefault={async () => {
		// We need preventDefault here because clicking the submit button will cause the browser to reload the page.
		// We want the logout to still work regardless of JS being enabled or not so the user can end their session.
		// Also is a security risk not be able to end your session.
		const response = await fetch('/api/auth/logout', {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		});

		if (response.ok) {
			invalidateAll(); // (clears) all cached load() data on the client side. Invalidating something means the data is now stale or outdated - go fetch it.
			// Look under Network tab then fetch/XHR then click logout page to see that we refreshed the page
		}
	}}
>
	<button type="submit">Logout</button>
</form>

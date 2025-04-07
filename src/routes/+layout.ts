import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data, url }) => {
	// Grab the data from user that was given to us from our +layout.server.ts file previously
	const { user } = data || {};

	// If user (meaning they are logged in since we have data and it's not null) && they try to access /login, redirect them to the homepage
	if (user && url.pathname === '/login') {
		throw redirect(307, '/');
	}

	// If we don't have a user (no data) and they aren't trying to login, then they should only be directed to the login page
	if (!user && url.pathname !== '/login') {
		throw redirect(307, '/login');
	}

	// You must return what ever type of data you requested in the +layout.server.ts function, here in the +layout.ts file so it's available to us in the +layout.svelte
	return {
		user
	};
};

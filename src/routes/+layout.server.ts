import { SPOTIFY_BASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	// load - runs before rendering a layout or page

	/**
     * 🧩 load Function in SvelteKit
            In SvelteKit, a load() function is how you fetch data before the page or layout is rendered.

            If it's in a page file like +page.ts, it runs just for that page.

            If it's in a layout file like +layout.server.ts, it runs for the whole layout (and every nested route inside it).

            If it's in a file ending in .server.ts, then it runs only on the server.
     */

	const accessToken = cookies.get('access_token');

	if (!accessToken) {
		return {
			user: null
		};
	}

	// Fetch user's profile response object using access token: https://developer.spotify.com/documentation/web-api/concepts/access-token
	const profileResponse = await fetch(`${SPOTIFY_BASE_URL}/me`, {
		headers: {
			Authorization: 'Bearer ' + accessToken
		}
	});

	console.log(profileResponse);

	// If a profile is found by using the accessToken call then we store the profile JSON response in an object, which the shape was defined previously in app.d.ts
	if (profileResponse.ok) {
		const profile: SpotifyApi.CurrentUsersProfileResponse = await profileResponse.json();

		return {
			user: profile
		};
	} else {
		// Otherwise just return an empty user
		// ? I believe this logs out the user, not sure yet.
		return {
			user: null
		};
	}
};

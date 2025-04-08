import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, cookies }) => {
	const refreshToken = cookies.get('refresh_token');

	const refreshResponse = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(
				`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
			).toString('base64')}`
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken || ''
			// client_id: SPOTIFY_APP_CLIENT_ID
		})
	});

	const refreshJSON = await refreshResponse.json();

	// If the refresh token did not work, then we clear both cookie tokens and throw an error
	if (refreshJSON.error) {
		cookies.delete('refresh_token', { path: '/' });
		cookies.delete('access_token', { path: '/' });
		throw error(401, refreshJSON.error_description);
	}

	cookies.set('refresh_token', refreshJSON.refresh_token, { path: '/' });
	cookies.set('access_token', refreshJSON.access_token, { path: '/' });

	return json(refreshJSON);
};

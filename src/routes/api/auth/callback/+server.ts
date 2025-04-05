import { BASE_URL, SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
	// --- 1. Retrieve authorization code and state from Spotify's redirect URL ---
	const code = url.searchParams.get('code') || null; // Temporary code sent by Spotify; used to exchange for an access token.
	const state = url.searchParams.get('state') || null; // Used to verify the request is valid and prevent CSRF.

	// --- 2. Retrieve stored state and PKCE code_verifier from cookies (set during login redirect) ---
	const storedState = cookies.get('spotify_auth_state') || null;
	const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

	// --- 3. Validate the state to ensure the response came from Spotify and not an attacker (CSRF protection) ---
	if (state == null || state !== storedState) {
		throw error(400, 'State Mismatch!'); // Block the flow if state values don't match.
	}

	// --- 4. If state is valid, exchange the code for an access token using the PKCE code_verifier ---
	// This POST request goes to Spotify's /api/token endpoint with the code + PKCE verifier
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(
				`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
			).toString('base64')}` // Encode client ID and secret for basic authentication
		},
		body: new URLSearchParams({
			code: code || '', // Authorization code received from Spotify
			redirect_uri: `${BASE_URL}/api/auth/callback`, // Must match the redirect URI used in the login flow
			grant_type: 'authorization_code', // Spotify expects this to be set
			code_verifier: storedChallengeVerifier || '', // Part of the PKCE flow; proves this app initiated the auth
			client_id: SPOTIFY_APP_CLIENT_ID
		})
	});

	// --- 5. Parse and log the token response ---
	const responseJSON = await response.json();

	console.log(responseJSON.error);

	if (responseJSON.error) {
		throw error(400, responseJSON.error_description);
	}

	cookies.delete('spotify_auth_state', { path: '/' });
	cookies.delete('spotify_auth_challenge_verifier', { path: '/' });

	cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
	cookies.set('access_token', responseJSON.access_token, { path: '/' });

	throw redirect(303, '/');
};

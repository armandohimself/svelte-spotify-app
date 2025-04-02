import { BASE_URL, SPOTIFY_APP_CLIENT_ID } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import pkce from 'pkce-gen';
import type { RequestHandler } from './$types';

const generate16RandomCharString = (length: number) => {
	let randomString = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

	for (let i = 0; i < length; i++) {
		randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	return randomString;
};

const state = generate16RandomCharString(16);
const challenge = pkce.create();

const scope =
	'ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read';

// Get Endpoint
export const GET: RequestHandler = () => {
	// Redirect to Spotify
	throw redirect(
		307,
		`https://accounts.spotify.com/authorize?${new URLSearchParams({
			// Required by Spotify's OAuth 2.0 Authorization Code Flow with PKCE
			response_type: 'code', // Instructs Spotify to return an authorization code after login (used to gain an access token & refresh token)
			client_id: SPOTIFY_APP_CLIENT_ID, // Your unique app identifier from the Spotify Developer Dashboard
			scope, // Space-delimited string of Spotify scopes (permissions) requested from the user
			redirect_uri: `${BASE_URL}/api/auth/callback`, // Must match the URI registered in the Spotify Developer Dashboard
			state, // A randomly generated string used to prevent CSRF attacks (optional but strongly recommended by Spotify & myself)
			code_challenge_method: 'S256', // Specifies the PKCE code challenge method (S256 is secure and required)
			code_challenge: challenge.code_challenge // Generated using pkce-gen to protect against code interception attacks
		})}`
	);
};

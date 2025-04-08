import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies, request }) => {
	// Clear the user's auth cookies to log them out
	cookies.delete('access_token', { path: '/' });
	cookies.delete('refresh_token', { path: '/' });

	// Check if the request came from our form by looking at the Accept header.
	if (request.headers.get('accept') === 'application/json') {
		// If it matches, return JSON to let the form know it was successful.
		return json({ success: true });
	}

	// Otherwise, if it was a regular form POST (not fetch), redirect the user to /login
	throw redirect(303, '/login');
	// We use 303 to ensure the browser follows up with a GET (not a repeat POST)
};

import type { RequestHandler } from './$types';

// `export const GET, POST, etc = () => {}` is how SveltKit defines HTTP routes

export const GET: RequestHandler = () => {
	return new Response('pong');
};

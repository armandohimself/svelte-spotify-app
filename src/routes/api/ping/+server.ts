import type { RequestHandler } from './$types';

// `export const GET, POST, etc = () => {}` is how SveltKit defines HTTP routes

const aMap = new Map<string, number>();

export const GET: RequestHandler = () => {
	aMap.set('armando', 1);
	aMap.set('arteaga', 2);

	for (const [name, score] of aMap.entries()) {
		console.log(`${name} scored ${score}`);
	}

	return new Response('pong');
};

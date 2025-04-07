// See https://svelte.dev/docs/kit/types#app.d.ts for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			user: SpotifyApi.CurrentUsersProfileResponse | null;
		}
		// interface Platform {}
	}
}

export {};

// app.d.ts - TypeScript definitions for the global App namespace in SvelteKit (aka tells SvelteKit our custom data that tells TypesScript to understand our custom data)
// These interfaces (aka a blueprint or contract for the shape of an object) allow you to tell SvelteKit what extra data your app adds to things like requests, page data, etc.

// This file makes types available globally, without having to import them everywhere (ambient types).
// Learn more: https://kit.svelte.dev/docs/types#app

// declare global {
// 	namespace App {
/**
		//! App.Error
		 * 
		 * This defines the shape of error objects that get passed to error pages
		 * (like when you throw `error(404, 'Not found')` in a load function).
		 */
// interface Error {
//   message: string;
//   code?: number;
// }

/**
		 //! App.Locals
		 * 
		 * This is where you define data that will be available on every request (server-side only).
		 * For example, you might attach the current user or a database connection to `event.locals`
		 * in a `handle` hook — and this interface defines what properties are available there.
		 * 
		 * Example usage:
		 * event.locals.user -> will be typed if you define `user` here
		 */
// interface Locals {
//   user: SpotifyApi.CurrentUsersProfileResponse | null;
// }

/**
	//! App.PageData
		* 
		* This defines what data is available in `$page.data` on the client.
		* It corresponds to the return value of `load()` functions in +page.ts or +layout.ts.
		* 
		* If you want `user` to be available in every page (e.g. for showing login info),
		* you'd define it here after loading it in a layout `load()` function.
		*/

//	interface PageData {
//		user: SpotifyApi.CurrentUsersProfileResponse | null;
//? We get SpotifyApi shape from `npm i @types/spotify-api` depedency we installed and that shape can be confirmed here: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/spotify-api/spotify-api-tests.ts
//	}

/**
		//! App.PageState
		 * 
		 * This defines the shape of an object which you can use to persist data in the browser history via `$app/navigation`. 
		 * 
		 * It’s a way to store page-related data in the browser’s session history, like you would with pushState or replaceState.
		 * This can be useful for saving UI state, like scroll positions, filter toggles, tabs, etc., without putting it in the URL or the store.
		 */
// 		interface PageState {
// 			user: SpotifyApi.CurrentUsersProfileResponse | null;
// 		}
// 	}
// }

/**
		//! App.Platform
		 * 
		 * This is used if you're deploying to a platform that injects its own environment or context,
		 * like Cloudflare Workers, Deno, etc.
		 * You usually don’t need to touch this unless you’re customizing adapter behavior.
		 */
// interface Platform {}

// This line ensures the file is treated as a module by TypeScript (avoids "Augmentations for the global scope" error)
//export {};

// Original File Code:
// declare global {
// 	namespace App {
// interface Error {}
// interface Locals {}
// interface PageData {}
// interface Platform {}
// 	}
// }

// export {};

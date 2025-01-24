import { renderServerComponent } from '$lib/index.js';

export async function load() {
	return {
		countServerComponent: await renderServerComponent({
			loader: () => import('./counter-a.svelte'),
			props: {
				initialCount: 0
			}
		})
	};
}

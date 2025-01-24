import type { Component } from 'svelte';
import { render as svelteRender } from 'svelte/server';
import type { Rendered, UnknownProps } from './types.js';

export type RenderServerComponentParams<TProps extends UnknownProps> = {
	loader: () => Promise<{ default: Component<TProps> }>;
	props: TProps;
};

export async function renderServerComponent<TProps extends UnknownProps>({
	loader,
	props
}: RenderServerComponentParams<TProps>) {
	const { default: LoadedComponent } = await loader();
	const { head, body } = svelteRender(LoadedComponent, { props });

	return {
		props,

		head,
		body
	} satisfies Rendered<TProps>;
}

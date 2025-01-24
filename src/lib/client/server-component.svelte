<script lang="ts">
	import { mount, onDestroy, onMount, unmount, type Component } from 'svelte';
	import type { UnknownProps, Rendered } from '../types.js';

	type Props<TProps extends UnknownProps> = {
		class?: string;
		loader: () => Promise<{ default: Component<TProps | any> }>;
		rendered: Rendered<TProps>;
		props?: Partial<TProps>;
	};
	let {
		class: className,
		rendered,
		loader,
		props = rendered.props
	}: Props<UnknownProps> = $props();

	let target: HTMLDivElement | null = null;
	let instance: Component | null = null;

	onMount(async () => {
		if (!target) {
			return;
		}

		if (instance) {
			unmount(instance);
			instance = null;
		}

		const { default: LoadedComponent } = await loader();

		target.innerHTML = '';

		instance = mount(LoadedComponent, {
			target,
			props
		}) as Component<typeof props>;
	});

	onDestroy(() => {
		if (instance) {
			unmount(instance);
			instance = null;
		}
	});
</script>

<svelte:head>
	{@html rendered.head}
</svelte:head>

<div class={className} bind:this={target}>
	{@html rendered.body}
</div>

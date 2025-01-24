<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		initialCount: number;
	}
	let { initialCount }: Props = $props();

	let count = $state(initialCount);
</script>

<button onclick={() => count++} transition:fade={{ duration: 1000 }}>{count}</button>

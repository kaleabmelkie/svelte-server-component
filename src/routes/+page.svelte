<script lang="ts">
	import { ServerComponent } from '$lib/client/index.js';

	let { data } = $props();
</script>

<ServerComponent
	loader={() => import('./counter-a.svelte')}
	rendered={data.countServerComponent}
	props={{
		initialCount: 1
	}}
/>

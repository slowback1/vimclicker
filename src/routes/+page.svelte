<script>
	import Message from '$lib/components/Message.svelte';
	import VimButton from '$lib/components/VimButton.svelte';

	let vimClicked = false;

	let onVimClick = () => (vimClicked = true);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<VimButton onClick={onVimClick} />

{#if vimClicked}
	<Message message="This is Vim!  You don't use a mouse for Vim!" />
{/if}

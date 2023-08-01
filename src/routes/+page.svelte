<script>
	import VimButton from '$lib/components/VimButton.svelte';
	import { addMessage } from '$lib/stores/messageStore';

	let vimClicked = false;

	let onVimClick = () => addMessage("This is Vim!  You don't use a mouse for Vim!");
</script>

<VimButton onClick={onVimClick} />

<script lang="ts">
	import { removeMesage, subscribeToMessages } from '$lib/stores/messageStore';
	import Message from './Message.svelte';

	let hasTooManyMessages = false;
	let messages: string[] = [];

	subscribeToMessages((v) => {
		messages = v.slice(0, 5);

		hasTooManyMessages = v.length > 5;
	});
</script>

<div data-testid="messages">
	{#if hasTooManyMessages}
		<div data-testid="messages__too-many">There are more than messages</div>
	{/if}

	{#each messages as message, index}
		<Message {message} clear={() => removeMesage(index)} />
	{/each}
</div>

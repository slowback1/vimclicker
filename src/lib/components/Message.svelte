<script lang="ts">
	export let message: string = '';

	export let clear = () => {};
</script>

<div data-testid="message">
	<p>{message}</p>

	<button on:click={clear} data-testid="message__clear">Clear</button>
</div>

<style lang="scss">
	div {
		padding: 8px 12px;
		text-align: left;

		p {
			font-size: 1.25rem;
		}
	}
</style>

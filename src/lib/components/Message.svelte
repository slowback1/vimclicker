<script lang="ts">
	export let message: string = '';
</script>

<div data-testid="message">
	<p>{message}</p>
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

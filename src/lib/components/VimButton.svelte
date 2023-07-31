<script lang="ts">
	export let onClick = () => {};
</script>

<button data-testid="vim-button" on:click={onClick}>
	<img src={'vim-logo.png'} alt="vim" />
</button>

<style lang="scss">
	@keyframes wiggle {
		0% {
			transform: rotate(-5deg);
		}

		5% {
			transform: rotate(5deg);
		}

		10% {
			transform: rotate(-10deg);
		}

		15% {
			transform: rotate(10deg);
		}

		20% {
			transform: rotate(0);
		}
		95% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(-5deg);
		}
	}

	button {
		animation: 5s wiggle infinite linear;
		background-color: transparent;
		border: none;
		cursor: pointer;

		img {
			width: 200px;
			height: auto;
		}
	}
</style>

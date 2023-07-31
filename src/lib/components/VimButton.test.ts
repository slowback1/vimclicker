import { describe, it, vi, expect, beforeEach, type Mock, afterEach } from 'vitest';
import { type RenderResult, render, fireEvent } from '@testing-library/svelte';
import VimButton from './VimButton.svelte';

describe('VimButton', () => {
	let result: RenderResult<VimButton>;
	let onClick: Mock;

	beforeEach(() => {
		onClick = vi.fn();
		result = render(VimButton, { onClick });
	});

	afterEach(() => {
		result.unmount();
	});

	it('renders a button', () => {
		expect(result.container.querySelector('button')).toBeTruthy();
	});

	it('clicking the button triggers onClick', () => {
		let button = result.container.querySelector('button');
		fireEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	it('contains an image', () => {
		const img = result.container.querySelector('button img');

		expect(img).toBeTruthy();
	});
});

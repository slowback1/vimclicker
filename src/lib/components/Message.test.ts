import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { type RenderResult, render } from '@testing-library/svelte';
import Message from './Message.svelte';

describe('Message', () => {
	let result: RenderResult<Message>;

	beforeEach(() => {
		result = render(Message, { message: 'Test Message' });
	});

	afterEach(() => {
		result.unmount();
	});

	it('renders without breaking', () => {
		let messageContainer = result.container.querySelector("[data-testid='message']");

		expect(messageContainer).toBeTruthy();
	});

	it('contains the given message', () => {
		let messageContainer = result.getByTestId('message');

		expect(messageContainer.innerHTML).toContain('Test Message');
	});
});

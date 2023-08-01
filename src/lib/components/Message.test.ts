import { fireEvent, render, type RenderResult } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import Message from './Message.svelte';

describe('Message', () => {
	let result: RenderResult<Message>;
	let clearMock: Mock;

	beforeEach(() => {
		clearMock = vi.fn();

		result = render(Message, { message: 'Test Message', clear: clearMock });
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

	it("has a button to clear the message", () => {
		let button = result.getByTestId("message__clear");

		expect(button).toBeTruthy();
	})

	it("clicking the button calls the clear function", () => {
		let button = result.getByTestId("message__clear");

		fireEvent.click(button);

		expect(clearMock).toHaveBeenCalled();
	})
});

import { subscribeToMessages } from '$lib/stores/messageStore';
import { fireEvent, render, type RenderResult } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('Main Page', () => {
	let result: RenderResult<Page>;

	beforeEach(() => {
		result = render(Page);
	});

	afterEach(() => {
		result.unmount();
	});


	it('contains a vim button', () => {
		expect(result.getByTestId('vim-button')).toBeTruthy();
	});

	it('clicking the vim button causes a message to be added to the message store', async () => {
		let button = result.getByTestId('vim-button');

		let messages: string[] = [];

		subscribeToMessages(v => messages = v);

		await fireEvent.click(button);

		expect(messages[0]).toContain(
			"This is Vim!  You don't use a mouse for Vim!"
		);
	});
});

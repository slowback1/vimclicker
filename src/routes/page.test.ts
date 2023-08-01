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

	it('clicking the vim button causes a message to show up', async () => {
		let button = result.getByTestId('vim-button');

		await fireEvent.click(button);

		expect(result.getByTestId('message')).toBeTruthy();
		expect(result.getByTestId('message').innerHTML).toContain(
			"This is Vim!  You don't use a mouse for Vim!"
		);
	});
});

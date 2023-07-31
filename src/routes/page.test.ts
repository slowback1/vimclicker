import { beforeEach, describe, expect, it } from 'vitest';
import Page from './+page.svelte';
import { type RenderResult, render } from '@testing-library/svelte';

describe('Main Page', () => {
	let result: RenderResult<any>;

	beforeEach(() => {
		result = render(Page) as any;
	});

	it('renders without breaking', () => {
		expect(result).toBeTruthy();
		let heading = result.container.querySelector('h1');
		expect(heading).toBeTruthy();
		expect(heading?.innerHTML).toEqual('Welcome to SvelteKit');
	});
});

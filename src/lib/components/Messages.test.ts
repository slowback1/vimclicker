import { addMessage, clearMessages, subscribeToMessages } from '$lib/stores/messageStore';
import { fireEvent, render, waitFor, type RenderResult } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Messages from './Messages.svelte';

describe("Messages", () => {
    let result: RenderResult<Messages>;

    let currentLength = 0;

    subscribeToMessages(v => currentLength = v.length);

    beforeEach(() => {
        result = render(Messages);
    })

    afterEach(() => {
        result.unmount();

        clearMessages();
    })

    it("it renders without breaking", () => {
        let wrapper = result.getByTestId("messages");

        expect(wrapper).toBeTruthy();
    })

    it("does not contain any messages if there are no messages", () => {
        let messages = result.container.querySelectorAll("[data-testid='message']");

        expect(messages).toHaveLength(0);
    })

    it("contains a message after adding a message to the store", async () => {
        addMessage("test message");

        await waitFor(() => {
            expect(result.getByTestId("message")).toBeTruthy();
        })
    })

    async function addTestMessage() {
        addMessage("test message");

        await waitFor(() => {
            expect(result.getAllByTestId("message")).toBeTruthy();
        })
    }

    it("clicking the clear button removes the message", async () => {
        await addTestMessage();

        let clearButton = result.getByTestId("message__clear");

        fireEvent.click(clearButton);

        await waitFor(() => {
            let messages = result.container.querySelectorAll("[data-testid='message']");

            expect(messages).toHaveLength(0);
        })
    })

    it("only shows 5 messages at most", async () => {
        addMessage("1");
        addMessage("2");
        addMessage("3");
        addMessage("4");
        addMessage("5");
        addMessage("6");

        await new Promise((resolve) => setTimeout(resolve, 100));

        await waitFor(() => {
            let messages = result.container.querySelectorAll("[data-testid='message']");
            expect(messages)
                .toHaveLength(5);
            expect(messages[4].textContent).toContain("5");
        })
    })

    it("displays a message indicating that there are more messages if there are more than 5 messages", async () => {
        addMessage("1");
        addMessage("2");
        addMessage("3");
        addMessage("4");
        addMessage("5");
        addMessage("6");


        await waitFor(() => {
            expect(result.getByTestId("messages__too-many")).toBeTruthy();
        })
    })
})
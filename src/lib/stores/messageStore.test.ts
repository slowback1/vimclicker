import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { addMessage, clearMessages, removeMesage, subscribeToMessages } from "./messageStore";

describe("MessageStore", () => {
    let currentValue: string[];

    beforeAll(() => {
        subscribeToMessages(m => currentValue = m);
    })

    afterEach(() => {
        clearMessages();
    })


    it("can add a message to the store", () => {
        addMessage("test message");

        expect(currentValue.length).toEqual(1);
        expect(currentValue[0]).toEqual("test message");
    })

    it("can clear all the messages", () => {
        addMessage("test message");

        clearMessages();

        expect(currentValue.length).toEqual(0);
    })

    it("can clear the first message from the queue", () => {
        addMessage("test message");
        addMessage("test message 2");

        removeMesage(0);

        expect(currentValue.length).toEqual(1);
        expect(currentValue[0]).toEqual("test message 2");
    })

    it("doesn't break when trying to remove the first message from the queue when the queue is empty", () => {
        removeMesage(0);

        expect(currentValue.length).toEqual(0);
    })

    it("doesn't break when trying to clear messages when the queue is empty", () => {
        clearMessages();

        expect(currentValue.length).toEqual(0);
    })
})
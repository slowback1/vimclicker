import { writable } from "svelte/store";

const messageStore = writable<string[]>([]);

export const subscribeToMessages = messageStore.subscribe;

export const addMessage = (message: string) => {
    messageStore.update(state => [...state, message]);
}

export const clearMessages = () => {
    messageStore.set([]);
}

export const removeMessage = (index: number) => {
    messageStore.update((state) => {
        state.splice(index, 1);
        return state;
    })
}
import { writable } from "svelte/store";

const messageQueue = writable<string[]>([]);

export const subscribeToMessages = messageQueue.subscribe;

export const addMessage = (message => messageQueue.update(state => [...state, message]));

export const clearMessages = () => messageQueue.set([]);

export const removeMesage = (index: number) => messageQueue.update((state) => {
    state.splice(index, 1);
    return state;
})
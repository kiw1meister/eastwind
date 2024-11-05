import { writable } from "svelte/store";

export interface AppState {
    active: boolean;
    view: string;
};

const initialState: AppState = {
    active: false,
    view: 'home'
};

export const siteState = writable<AppState>(initialState);
import { createContext } from "react";
import { IItem } from "../interfaces/IItem";

export const INITIAL_STATE = {
    themeName: 'dark',
    items: [] as IItem[],
};

export type InitialStateType = typeof INITIAL_STATE;

export const Context = createContext({
    state: INITIAL_STATE,
    toggleTheme: () => { },
    createNewItem: () => { },
    deleteItem: (id: string) => { },
    toggleIsEditing: (id: string) => { },
    editItem: (payload: IItem) => { },
})
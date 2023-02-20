import { ReactNode, useCallback, useReducer } from "react";
import { Context, INITIAL_STATE } from "./Context";
import { AppContextActions } from "../enums/AppContextActions";
import { IItem } from "../interfaces/IItem";
import { Reducer } from "./Reducer";

interface IProps {
    children: ReactNode;
}

export const Provider = ({ children }: IProps) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    const toggleTheme = useCallback(() =>
        dispatch({ type: AppContextActions.ToggleTheme }), [dispatch]);

    const createNewItem = useCallback(() =>
        dispatch({ type: AppContextActions.CreateNewItem }), []);

    const deleteItem = useCallback((id: string) =>
        dispatch({ type: AppContextActions.DeleteItem, payload: { id } }), []);

    const toggleIsEditing = useCallback((id: string) =>
        dispatch({ type: AppContextActions.ToggleIsEditing, payload: { id } }), []);

    const editItem = useCallback((payload: IItem) =>
        dispatch({ type: AppContextActions.EditItem, payload }), []);

    return (
        <Context.Provider
            value={{
                state,
                createNewItem,
                deleteItem,
                editItem,
                toggleIsEditing,
                toggleTheme,
            }}>
            {children}
        </Context.Provider>
    )
}

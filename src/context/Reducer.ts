import { AppContextActions } from '../enums/AppContextActions';
import { IDispatchAction } from '../interfaces/IDispatchAction';
import { InitialStateType, INITIAL_STATE } from './Context';
import { IItem } from '../interfaces/IItem';
import { v4 as uuidv4 } from 'uuid';

export const Reducer = (state = INITIAL_STATE, action: IDispatchAction): InitialStateType => {

    let tmpState = { ...state };

    switch (action.type) {

        case AppContextActions.ToggleTheme:
            tmpState.themeName = state.themeName === 'light' ? 'dark' : 'light';
            break;

        case AppContextActions.CreateNewItem:
            const newItem: IItem = {
                id: uuidv4(),
                isEditing: true
            }
            tmpState.items = [newItem, ...state.items];
            break;

        case AppContextActions.DeleteItem:
            tmpState.items = state.items.filter(({ id }) => id !== action.payload.id)
            break;

        case AppContextActions.ToggleIsEditing:
            tmpState.items = state.items.map(
                (item) => item.id === action.payload.id
                    ? { ...item, isEditing: !item.isEditing }
                    : item
            )
            break;

        case AppContextActions.EditItem:
            tmpState.items = state.items.map(
                (item) => item.id === action.payload.id
                    ? { ...item, ...action.payload, isEditing: false }
                    : item
            )
            break;

        default:
            throw new Error();
    }

    return tmpState;
}
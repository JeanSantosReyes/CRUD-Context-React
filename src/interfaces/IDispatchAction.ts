import { AppContextActions } from "../enums/AppContextActions";

export interface IDispatchAction {
    type: AppContextActions;
    payload?: any;
}

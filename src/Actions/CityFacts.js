import { ActionTypes } from '../Constants/Action.type';

export const setFactsList = (list) => {
    return {
        type: ActionTypes.SET_FACTS,
        payload: list
    }
}

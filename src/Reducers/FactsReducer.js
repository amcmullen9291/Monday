import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    location: [],
};

export const FactsReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_FACTS:
            return { ...state, location: payload};
        default:
            return state
    }
};
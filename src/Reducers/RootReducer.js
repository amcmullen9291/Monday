import { combineReducers } from 'redux';
import { FactsReducer } from './FactsReducer';

const RootReducer = combineReducers({
    City: FactsReducer
});

export default RootReducer;
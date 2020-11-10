import { combineReducers } from 'redux';

import itemsReducer from './reducers/itemsReducer';

const appReducer = combineReducers({
    items: itemsReducer
})

export default appReducer;

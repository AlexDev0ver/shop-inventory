import { combineReducers } from 'redux';

import itemsReducer from './reducers/itemsReducer';

const appReducer = combineReducers({
    products: itemsReducer
})

export default appReducer;

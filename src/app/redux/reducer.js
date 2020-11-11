import { combineReducers } from 'redux';

import itemsReducer from './reducers/itemsReducer';
import commonReducer from './reducers/commonReducer';

const appReducer = combineReducers({
    products: itemsReducer,
    common: commonReducer
})

export default appReducer;

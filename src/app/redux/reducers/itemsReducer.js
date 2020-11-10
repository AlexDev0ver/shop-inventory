import { combineReducers } from 'redux';

import ACTION from '../action-enum';

function items(state = [], action) {
    switch(action.type) {
        case ACTION.SET_ITEMS:
            return action.payload;
        default:
            return state;
    }
}

function itemsFakeFetching(state = false, action) {
    switch(action.type) {
        case ACTION.TOGGLE_ITEMS_FAKE_FETCHING:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    items, itemsFakeFetching
})

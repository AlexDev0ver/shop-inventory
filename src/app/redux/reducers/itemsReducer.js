// @flow
import { combineReducers } from 'redux';

import ACTION from '../action-enum';
import type { ActionType } from '../../types/ActionType';
import type { ItemType } from '../../types/ItemType';

function items(state: Array<ItemType> = [], action: ActionType): Array<ItemType> {
    switch(action.type) {
        case ACTION.SET_ITEMS:
            return action.payload;
        default:
            return state;
    }
}

function itemsFakeFetching(state: boolean = false, action: ActionType): boolean {
    switch(action.type) {
        case ACTION.TOGGLE_ITEMS_FAKE_FETCHING:
            return action.payload;
        default:
            return state;
    }
}

export type CombinedReducer = {
    items: Array<ItemType>,
    itemsFakeFetching: boolean
}

export default combineReducers<CombinedReducer, ActionType>({
    items, itemsFakeFetching
})

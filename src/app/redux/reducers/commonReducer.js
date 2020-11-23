// @flow
import { combineReducers } from 'redux';
import ACTION from '../action-enum';

import type { ActionType } from '../../types/ActionType';

function chosenItemId(state: string | null = null, action: ActionType): string | null {
    switch(action.type) {
        case ACTION.CHOOSE_ITEM_ID:
            return action.payload
        default:
            return state
    }
}

type CombinedReducer = {
    chosenItemId: string | null
}

const commonReducer: commonReducer<CombinedReducer, ActionType> = combineReducers({ chosenItemId })

export default commonReducer;

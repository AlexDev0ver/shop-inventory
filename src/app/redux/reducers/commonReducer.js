import { combineReducers } from 'redux';
import ACTION from '../action-enum';

function chosenItemId(state = null, action) {
    switch(action.type) {
        case ACTION.CHOOSE_ITEM_ID:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    chosenItemId
})

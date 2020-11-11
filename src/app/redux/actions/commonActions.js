import ACTION from '../action-enum';

export function chooseItemId (payload) {
    return {type: ACTION.CHOOSE_ITEM_ID, payload}
}

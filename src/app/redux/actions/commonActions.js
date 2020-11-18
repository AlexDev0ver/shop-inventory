// @flow
import ACTION from '../action-enum';

import type { ActionType } from '../../types/ActionType';

export function chooseItemId (payload: string | null): ActionType {
    return {type: ACTION.CHOOSE_ITEM_ID, payload}
}

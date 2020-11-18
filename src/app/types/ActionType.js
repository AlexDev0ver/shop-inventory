// @flow
import ACTION from '../redux/action-enum';
import type { ItemType } from './ItemType';

type toggleItemsFakeFetching = {type: typeof ACTION.TOGGLE_ITEMS_FAKE_FETCHING, payload: boolean};
type setItems = {type: typeof ACTION.SET_ITEMS, payload: Array<ItemType>};
type chooseItemId = {type: typeof ACTION.CHOOSE_ITEM_ID, payload: string | null};

export type ActionType =
|toggleItemsFakeFetching
|setItems
|chooseItemId;

// @flow
import ACTION from '../action-enum';

import type { ActionType } from '../../types/ActionType';
import type { ItemType } from '../../types/ItemType';
import type { ThunkType } from '../../types/ThunkType';

export function toggleItemsFakeFetching(payload: boolean): ActionType {
    return {type: ACTION.TOGGLE_ITEMS_FAKE_FETCHING, payload}
};

export function setItems(payload: Array<ItemType>): ActionType {
    return {type: ACTION.SET_ITEMS, payload}
};

export function updateLocalStorage (items: Array<ItemType>): void {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
}

export const getItems = (): ThunkType => async (dispatch, getState) => {
    if (!getState().products.items.length) dispatch(toggleItemsFakeFetching(true));

    if (localStorage.getItem("items") === null) {
        localStorage.setItem("items", "[]");
        dispatch(toggleItemsFakeFetching(false));
        return;
    }

    const itemsLocalStorage = localStorage.getItem("items");

    setTimeout(() => {
        if (itemsLocalStorage && itemsLocalStorage.length) {
            dispatch(setItems(
                JSON.parse(itemsLocalStorage)
            ));
        }

        dispatch(toggleItemsFakeFetching(false));
    }, 1500) // immitate server unswer time
};



export const createItem = ({name, quantity, description = null}: ItemType): ThunkType => async(dispatch, getState) => {
    if (name === "" || quantity === 0) return;

    const items: Array<ItemType> = getState().products.items;
    const updatedItems: Array<ItemType> = [...items, {name: name, quantity: quantity, description: description, id:`${ Math.floor(Math.random()*1000)}`} ];

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

export const editItem = (updatedItem: ItemType): ThunkType => async(dispatch, getState) => {
    const items: Array<ItemType> = getState().products.items;
    const updatedItems: Array<ItemType> = items.map(i => i.id === updatedItem.id ? updatedItem : i);

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

export const deleteItem = (item: ItemType): ThunkType => async(dispatch, getState) => {
    const items: Array<ItemType> = getState().products.items;
    const updatedItems: Array<ItemType> = items.filter(i => i.id !== item.id);

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

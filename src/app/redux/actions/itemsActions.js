import ACTION from '../action-enum';

export function toggleItemsFakeFetching(payload) {
    return {type: ACTION.TOGGLE_ITEMS_FAKE_FETCHING, payload}
};

export function setItems(payload) {
    return {type: ACTION.SET_ITEMS, payload}
};

export const dispatchItems = (items) => dispatch => {
    dispatch(setItems(items));

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
}

export const getItems = () => dispatch => {
    dispatch(toggleItemsFakeFetching(true));

    if (localStorage.getItem("items") === null) {
        localStorage.setItem("items", "[]");
        dispatch(toggleItemsFakeFetching(false));
        return;
    }

    setTimeout(() => {
        if (localStorage.getItem("items").items) {
            dispatch(setItems(
                JSON.parse(localStorage.getItem("items").items)
            ));
        }

        dispatch(toggleItemsFakeFetching(false));
    }, 1500) // immitate server unswer time
};



export const createItem = (name, quantity) => async(dispatch, getState) => {
    const items = getState().items;

    const updatedItems = [...items, {name: name, quantity: quantity, id: Math.floor(Math.random()*1000)}];
    dispatchItems(updatedItems);
}

export const editItem = (updatedItem) => async(dispatch, getState) => {
    const items = getState().items;

    const updatedItems = items.map(i => i.id === updatedItem.id ? updatedItem : i);
    dispatchItems(updatedItems);
}

export const deleteItem = (item) => async(dispatch, getState) => {
    const items = getState().items;

    const updatedItems = items.filter(i => i.id !== item.id);
    dispatchItems(updatedItems);
}

export const searchItem = (name) => async(dispatch, getState) => {
    const items = getState().items;

    const filteredItems = items.filter(i => i.name.toLowerCase().includes === name);
    dispatchItems(filteredItems);
}

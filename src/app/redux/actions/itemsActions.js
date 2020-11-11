import ACTION from '../action-enum';

export function toggleItemsFakeFetching(payload) {
    return {type: ACTION.TOGGLE_ITEMS_FAKE_FETCHING, payload}
};

export function setItems(payload) {
    return {type: ACTION.SET_ITEMS, payload}
};

export function updateLocalStorage (items) {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
}

export const getItems = () => async (dispatch, getState) => {
    if (!getState().products.items.length) dispatch(toggleItemsFakeFetching(true));

    if (localStorage.getItem("items") === null) {
        localStorage.setItem("items", "[]");
        dispatch(toggleItemsFakeFetching(false));
        return;
    }

    setTimeout(() => {
        if (localStorage.getItem("items").length) {
            dispatch(setItems(
                JSON.parse(localStorage.getItem("items"))
            ));
        }

        dispatch(toggleItemsFakeFetching(false));
    }, 1500) // immitate server unswer time
};



export const createItem = ({name, quantity}) => async(dispatch, getState) => {
    if (name === "" || quantity === 0) return;

    const items = getState().products.items;
    const updatedItems = [...items, {name: name, quantity: quantity, id: Math.floor(Math.random()*1000)} ];

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

export const editItem = (updatedItem) => async(dispatch, getState) => {
    const items = getState().products.items;
    const updatedItems = items.map(i => i.id === updatedItem.id ? updatedItem : i);

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

export const deleteItem = (item) => async(dispatch, getState) => {
    const items = getState().products.items;
    const updatedItems = items.filter(i => i.id !== item.id);

    dispatch(setItems(updatedItems));
    updateLocalStorage(updatedItems);
}

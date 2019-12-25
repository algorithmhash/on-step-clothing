import { createSelector } from 'reselect';
//returns 1 layer deep of state, or piece of state
// always use smaller pieces of state, more specific selectors
// that have some sort of transformer
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems.reduce((accumulatedQuantity, cartItem) => 
    accumulatedQuantity + cartItem.quantity,
    0)
    );
import { createSelector } from 'reselect'
import { createStore } from 'redux'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) => (
      accumulatedQuantity + cartItem.quantity
    ), 0)
)
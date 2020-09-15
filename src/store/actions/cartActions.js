export const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: product
  }
}
export const increaseProductCartQuantity = (productId, productPrice) => {
  return {
    type: 'INCREASE_PRODUCT_CART_QUANTITY',
    payload: [productId, productPrice]
  }
}
export const decreaseProductCartQuantity = (productId, productPrice) => {
  return {
    type: 'DECREASE_PRODUCT_CART_QUANTITY',
    payload: [productId, productPrice]
  }
}
export const deleteProductFromCart = (productId, productSum) => {
  return {
    type: 'DELETE_PRODUCT_FROM_CART',
    payload: [productId, productSum]
  }
}
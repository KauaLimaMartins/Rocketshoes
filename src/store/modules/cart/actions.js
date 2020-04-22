export function addToCartRequest(id) {
  return {
    // All action needs a:
    type: '@cart/ADD_REQUEST',
    // The content
    id,
  };
}
export function addToCartSuccess(product) {
  return {
    // All action needs a:
    type: '@cart/ADD_SUCCESS',
    // The content
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

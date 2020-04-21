export function addToCart(product) {
  return {
    // All action needs a:
    type: '@cart/ADD',
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

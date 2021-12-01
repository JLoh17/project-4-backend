module.exports = {
  getUserByToken: require('./get-user-by-token'),
  authenticateCurrentUserByToken: require('./authenticate-current-user-by-token'),
  checkValidation: require('./check-validation'),
  cart: {
    getCartByID: require('./my/cart/get-cart-by-id')
  }
}

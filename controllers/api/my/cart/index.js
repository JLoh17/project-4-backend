const { authenticateCurrentUserByToken } = require('../../../_helpers')

const { Cart, Product, User } = require('../../../../models')

const apiCartIndex = async function (req, res) {
  const { locals: { currentUser } } = res

  const cartNewIndex = await Cart.findAll({
    where: {
      UserId: currentUser.id
    },
    include: [
      {
        association: Cart.Product,
        include: Product.Images,
      }, {
        association: Cart.User,
        include: User.Points,
      }
    ]
  })

  res.status(200).json({
    cart: cartNewIndex
  })
}

module.exports = [
  authenticateCurrentUserByToken,
  apiCartIndex]

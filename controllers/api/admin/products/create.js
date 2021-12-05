const { body } = require('express-validator')
const multer = require('multer')


const { authenticateCurrentUserByToken, checkValidation } = require('../../../_helpers')
const { Product } = require('../../../../models')

const permittedParams = [
  'productName',
  'CategoryId',
  'price',
  'description',
  'isNew',
  'isFeatured',
  'isDisabled',
  'imageURL'
  // 'Image',
]

// const validation = [
//   body('Product')
//     .isString().withMessage('Product name must be a String')
//     .notEmpty().withMessage('Product name is Required'),
//   body('CategoryId')
//     .toInt().isInt({ min: 1, max: 4 }).withMessage('Category must be between 1 and 4'),
//   body('p')
//     .toIdt().isInt({ min: 1, max: 99999 }).withMessage('Category must be between 1 and 4'),
//   body('Description')
//     .isString().withMessage('Description must be a String')
//     .notEmpty().withMessage('Description is Required')
//     .isLength({ max: 500 }).withMessage('Character limit is 500, please reduce the number of characters'),
//   body('Image')
//     .notEmpty().withMessage('Image is Required')

// ]

const apiProductCreate = async function(req, res) {
  const { locals: { currentUser } } = res
    const { body: productParams } = req

  if (!currentUser.isAdmin) {
    return res.json("Unauthorized access")
  }

  const newProduct = await Product.create({
    ...productParams,
  }, {
    fields: permittedParams,
    include: {
      association: Product.Images,
    },
  })

  res.json({ message: 'Product created'})
}

module.exports = [
  multer().none(),
  authenticateCurrentUserByToken,
  // validation,
  checkValidation,
  apiProductCreate
]

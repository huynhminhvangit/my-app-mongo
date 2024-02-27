const express = require('express')
const { getProducts, createProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/product.controller')
const router = express.Router()

router.get('/', getProducts)

router.post('/', createProduct)

router.get('/:id', getProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router
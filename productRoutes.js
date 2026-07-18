const express = require('express')
const { addProduct } = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const { getProducts } = require('../controllers/productController')
const { deleteProduct } = require('../controllers/productController')
const { updateProducts } = require('../controllers/productController')


const router = express.Router()

router.post('/addproduct',authMiddleware,adminMiddleware,addProduct)
router.get('/getproduct',getProducts)
router.delete('/deleteproduct/:id',authMiddleware,adminMiddleware,deleteProduct)
router.put('/updateproduct/:id',updateProducts)




module.exports = router
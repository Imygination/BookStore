const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get('/',Controller.home)
router.get('/products',Controller )

router.get('/products/buy/:id',Controller.successBuyProducts)// ini untuk setelah beli stock berkurang

router.get('/products/add',Controller )//buat crud seller optional
router.post('/products/add',Controller )

router.use('/users',Controller )
router.get('/transactions',Controller)



module.exports = router
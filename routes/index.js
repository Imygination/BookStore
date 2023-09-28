const express = require('express')
const Controller = require('../controllers')
const router = express.Router()

router.get('/',Controller.home)
router.get('/products',Controller )

router.get('/products/buy/:id',Controller.successBuyProducts)// ini untuk setelah beli stock berkurang

router.get('/products/add',Controller )//buat crud seller optional
router.post('/products/add',Controller )

router.get('/users',Controller )

router.get('/users/profile/:id',Controller.addUserProfile)
router.post('/users/profile/:id',Controller.postAddProfiles)

router.get('/users/profile/:id/edit',Controller.editUserProfile )
router.post('/users/profile/:id/edit',Controller.postEditUserProfile)

router.get('/transactions',Controller)



module.exports = router
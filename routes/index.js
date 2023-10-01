const express = require('express')
const Controller = require('../controllers')
const router = express.Router()

router.get('/',Controller.home)

router.get('/transactions', Controller.showTransaction)

router.get('/users', Controller.login)
router.post('/users', Controller.loginUser)

router.get('/users/logout', Controller.logout)

router.get('/users/register', Controller.registerForm)
router.post('/users/register', Controller.insertUser)

router.use(Controller.Authen)


router.get('/products/buy/:id',Controller.buyProducts)// ini untuk setelah beli stock berkurang
router.get('/products/edit/:id',Controller.editSeller)// ini untuk setelah beli stock berkurang
router.get('/products/delete/:id',Controller.deleteProduct)// ini untuk setelah beli stock berkurang


router.get('/products/add',Controller.addProduct )//buat crud seller optional
router.post('/products/add',Controller.postAddProduct )

router.get('/products/edit/:id',Controller.editSeller )
router.post('/products/edit/:id',Controller.postEditSeller )

router.get('/users/profile/:id',Controller.addUserProfile)
router.post('/users/profile/:id',Controller.postAddProfiles)

router.get('/users/profile/:id/edit',Controller.editUserProfile )
router.post('/users/profile/:id/edit',Controller.postEditUserProfile)







// const session = require('express-session')
module.exports = router
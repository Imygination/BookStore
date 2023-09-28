const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
// const session = require('express-session')

router.get('/', Controller.home)

router.get('/users', Controller.login)
router.post('/users', Controller.loginUser)

router.get('/users/logout', Controller.logout)

router.get('/users/register', Controller.registerForm)
router.post('/users/register', Controller.insertUser)

router.use(Controller.Authen)

router.get('/products',Controller)
router.get('/products/add', Controller.add)//buat crud seller optional
// router.post('/products/add',Controller )


// router.use('/transactions',Controller)


module.exports = router
const express = require('express')
const router = express.Router()
const routerProduct = require('./product')
const routerUser = require('./user')
const routerTransactions = require('./transaction')

router.get('/')
router.use('/products', routerProduct)
router.use('/users', routerUser)
router.use('/transactions', routerTransactions)


module.exports = router
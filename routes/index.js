const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get('/',Controller.home)
router.use('/products',Controller )

router.use('/products/add',Controller )//buat crud seller optional
router.post('/products/add',Controller )

router.use('/users',Controller )
router.use('/transactions',Controller)


module.exports = router
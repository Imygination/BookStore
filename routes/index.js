const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get('/',Controller.home)
router.use('/products',Controller )
router.use('/users',Controller )
router.use('/transactions',Controller)


module.exports = router
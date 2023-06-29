const express = require('express')
const userRoute = require('./userRoute')

const router = express.Router()

router.use('/users', userRoute) // Mount the userRoute under the '/users' path

module.exports = router

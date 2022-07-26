const express = require('express');
const {handleVerification} = require('../controllers/verification.js')
const router = express.Router()

router.post('/verification', handleVerification)

module.exports = router
const express = require('express');
const router = express.Router()
const moviesController = require('../controllers/moviesController')

router.get('/all', moviesController.getAll)

module.exports = router
const express = require('express')
const tourControllers = require('../controllers/tour.controller')

const router = express.Router()

router
.route('/')
.get(tourControllers.getTour)
.post(tourControllers.createTour)

router
.route('/:id')
.patch(tourControllers.updateATour)

module.exports = router
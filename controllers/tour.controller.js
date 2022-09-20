const Tour = require('../models/Tour')
const { getTourServices, createTourServices } = require('../services/tour.services')

exports.getTour = async (req, res, next) => {
    try {
        const result = await getTourServices()
        res.status(200).json({
            status: 'success',
            message: 'Tours Data get Successfully',
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Tours Data cannot get',
            error: error.message
        })
    }
}

exports.createTour = async (req, res, next) => {
    try {
        const result = await createTourServices(req.body)
        res.status(200).json({
            status: 'success',
            message: "Data inserted Successfully",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Tour insert fail',
            error: error.message
        })
    }
}
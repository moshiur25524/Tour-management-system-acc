const Tour = require('../models/Tour')
const { getTourServices, createTourServices, updateTourService } = require('../services/tour.services')

exports.getTour = async (req, res, next) => {
    try {

        const queries = {}

        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy;
        }

        if(req.query.fields){
            const fieldsBy = req.query.fields.split(',').join(' ')
            queries.fieldsBy = fieldsBy
        }
        
        const result = await getTourServices(queries)
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

exports.updateATour = async(req, res) =>{
    try{
        const {id} = req.params
        const result = await updateTourService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'The Tour is Successfully updated',
            data: result
        })
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            message: 'The Data Update is failed',
            error: error.message
        })
    }
}
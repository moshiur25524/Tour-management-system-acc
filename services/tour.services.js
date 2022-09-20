const Tour = require('../models/Tour')

exports.getTourServices = async()=>{
const tours = await Tour.find({})
return tours
}

exports.createTourServices = async(data) =>{
    const tour = await Tour.create(data)
    return tour
}
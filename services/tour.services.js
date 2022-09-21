const Tour = require('../models/Tour')

exports.getTourServices = async(queries)=>{
const tours = await Tour.find({}).sort(queries.sortBy).select(queries.fieldsBy)
return tours
}

exports.createTourServices = async(data) =>{
    const tour = await Tour.create(data)
    return tour
}

exports.updateTourService = async(tourId, data)=>{
    const tour = await Tour.updateOne({_id: tourId},{$set: data},{runValidators:true})
    return tour
}

exports.getTourServiceById = async(id) =>{
    const tourDetails = await Tour.find({_id:id})
    return tourDetails
}
const mongoose = require('mongoose')

// Tour Schema

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must be need a name'],
        trim: true,
        unique: true,
        minLength: [3, 'The name would be at least 3 characters'],
        maxLength: [100, 'The Name is too large']
    },
    description: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    price: {
        type: Number,
        required: [true, 'Please Provide the Price'],
        min: [0, "Price Must be a positive value"],
    },
    ratings: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'continued'],
            message: "The value must be {value}"
        }
    }
}, { timestamps: true })

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour
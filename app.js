const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const colors = require('colors');
const cors = require('cors')
const port = process.env.PORT || 8080;
const app = express()

// middleWare

app.use(express.json())
app.use(cors())

// DataBase Connection

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('DataBase is successfully connected')
})

/*----------Main Part------------*/

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

app.get('/api/v1/tour', async (req, res, next) => {
    try {
        const result = await Tour.find({})
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
})

app.post('/api/v1/tour', async (req, res, next) => {
    try {
        const result = await Tour.create(req.body)
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
})

app.get('/', (req, res) => {
    res.send('The Server is running')
})

// Server Connection

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})
module.exports = app
const express = require('express')
const mongoose = require('mongoose')
const Tour = require('./models/Tour')
const cors = require('cors')
const dotenv = require('dotenv').config()
const colors = require('colors');
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

const tourRoutes = require('./routes/tour.route')

app.use('/api/v1/tour', tourRoutes )

app.get('/', (req, res) => {
    res.send('The Server is running')
})

// Server Connection

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})
module.exports = app
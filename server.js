const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const colors = require('colors');
const express = require('express')
const app = express()
// const app = require('./app');

// DataBase Connection

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('DataBase is successfully connected')
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Listening from port ${port}`);
})


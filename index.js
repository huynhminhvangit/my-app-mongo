const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/product.route.js')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// routes
app.use('/api/products', productRoute)

// Connect db
mongoose.connect('mongodb://127.0.0.1:27017/imt_code')
    .then(() => {
        console.log('Connected to Database!!')
        app.listen(3001, () => {
            console.log('Server is running on port 3001')
        })
    })
    .catch(() => {
        console.log('Connection Database failed!!')
    })



app.get('/', (req, res) => {
    res.send('hello world')
})

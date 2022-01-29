// Server
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// DB Connection
mongoose.connect('mongodb+srv://bortizjr84:silent84@cluster0.x4jmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('connected to the db-ticket-now'))

// Routes
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']})) 


// Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Server Port
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})
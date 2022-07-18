// Server
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const cors = require('cors')
const PORT = process.env.PORT || 8000
require('dotenv').config()

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// DB Connection
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("TicketNow DB connected!"))
.catch(err => console.log(err.message))

// Routes
app.use('/api/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/ticket', require('./routes/ticketRouter'))

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

//test 1
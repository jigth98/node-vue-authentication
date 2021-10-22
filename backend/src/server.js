const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const router = require('./routes/router')

// Environment variables
require('dotenv').config()

// Database connection
require('./database')

// Settings
app.set('PORT', process.env.PORT || 3941)

// Middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true, // Allow Passing cookies in the headers of this APIs when it's requested
    origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:5000'] // Common ports used by VueJS
}))

// Routes
app.use('/api', router)

const PORT = app.get('PORT')

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

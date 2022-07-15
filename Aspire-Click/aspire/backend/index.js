import connectDB from './Config/db.js'
import userRoutes from './Routes/userRoutes.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

//connect database
connectDB()
const app = express()
const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Creating API for user
app.use('/api/users', userRoutes)

const PORT = 3001

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running on port ${PORT}`))

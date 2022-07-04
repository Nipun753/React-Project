import express from 'express';
import userRoutes  from './Routes/userRoute.js'
import connectDB  from './Database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express()
const port = 3001

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
connectDB()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', userRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
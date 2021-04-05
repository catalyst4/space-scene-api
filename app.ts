import express from 'express'
import update from './routes/update'
import vehicle from './routes/vehicle'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './config/db'

dotenv.config()

connectDb()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/v1/vehicle', vehicle)
app.use('/api/v1/starship/update', update)

app.listen(PORT, () => console.log(`API running on Port: ${PORT}`))
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

dotenv.config()

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes)
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
.catch(() => console.log('Error occurred in connecting to mongoDB'))
mongoose.set('useFindAndModify', false)
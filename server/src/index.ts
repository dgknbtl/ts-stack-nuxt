import express from 'express'
import { userRoutes } from './modules/user'
import connectDB from './config/db.config'

const app = express()

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)

app.listen(4000, () => {
  console.log(`server running on port 4000`)
})

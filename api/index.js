const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)

app.post('/register', (req, res) => {
  const { name, email, password } = req.body
  res.json({ name, email, password })
})

app.get('/test', (req, res) => {
  res.json({ message: 'passZXsdfsdf!' })
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})

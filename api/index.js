const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const User = require('./models/User.js')
require('dotenv').config()
const app = express()
const bcrypt = require('bcryptjs')

// generate a salt
const bcryptSalt = bcrypt.genSaltSync(10)

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

// Connect to the database
mongoose.connect(process.env.MONGO_URI)

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  try {
    const userDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt), // hash the password before saving it to the database
  })
  res.json({ name, email, password })
}) catch (error) {
  res.status(422).json({ message: error.message })
}

app.get('/test', (req, res) => {
  res.json({ message: 'pass!' })
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})

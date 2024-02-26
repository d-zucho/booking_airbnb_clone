const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

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

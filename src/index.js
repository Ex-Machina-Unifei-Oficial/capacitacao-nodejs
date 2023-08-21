const express = require('express')
const PORT = 3333

const app = express()

const users = []

app.use(express.json())

// POST http://localhost:3333/users
app.post('/users', (req, res) => {
    const {name, age, email} = req.body
    users.push({name, age, email})

    if(users.length > 0){
        return res.status(201).json({body: req.body})
    }
    return res.status(400).json()
})

// GET http://localhost:3333/users
app.get('/users', (_, res) => {
    return res.json(users)
})

// GET http://localhost:3333/users:1
app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    return res.json({userId})
})

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})

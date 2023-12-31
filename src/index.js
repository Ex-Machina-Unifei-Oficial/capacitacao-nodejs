const express = require('express')
const PORT = 3333

const app = express()

const users = []

app.use(express.json())

// POST http://localhost:3333/users
app.post('/users', (req, res) => {
    const {name, age, email} = req.body // Body Params
    users.push({id: 1, name, age, email})

    if(users.length > 0){
        console.log(users)
        return res.status(201).json()
    }
    return res.status(400).json()
})

// GET http://localhost:3333/users
app.get('/users', (_, res) => {
    return res.json(users)
})

// GET http://localhost:3333/users:1
app.get('/users/:id', (req, res) => {
    const userId = req.params.id // Route params
    const user = users.find(user => user.id == userId)
    return res.json({user})
})

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})

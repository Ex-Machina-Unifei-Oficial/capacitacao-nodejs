const express = require('express')
const PORT = 3333

const app = express()

const users = []

app.use(express.json())

app.post('/users', (req, res) => {
    const {name, age, email} = req.body
    users.push({name, age, email})

    if(users.length > 0){
        return res.status(201).json({body: req.body})
    }
    return res.status(400).json()
})

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})

/*

hots: http://localhost:3333/user/1

/user POST {name, email, senha}
/user/:id GET

*/
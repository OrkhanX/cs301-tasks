const express = require('express') //ES5 ES6 (JavaScript)
require('dotenv').config()
const BodyParser = require('body-parser')
require('colors')

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))


let users = [
    {
        id: 1,
        username: 'Ulfat',
        surname: 'Aslan',
        university: 'ADU',
        age: 23
    },
    {
        id: 2,
        username: 'Mahir',
        surname: 'Qarga',
        university: 'BDU',
        age: 23
    },
    {
        id: 3,
        username: 'Nihad',
        surname: 'Wolf',
        university: 'CDU',
        age: 22
    },
    {
        id: 4,
        username: 'Nazrin',
        surname: 'Fox',
        university:'DDU',
        age: 18
    },
]


app.get('/students', (req, res) => {
    res.json(users)
})

app.get('/students/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (user) {
        return res.json(user)
    } else {
        return res.send('User not found with the given Id!')
    }
})

app.delete('/students/:id', (req, res) => {
    const params = req.params
    users = users.filter((item) => item.id != params.id)
    return res.send('User deleted successfully!')
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})


app.patch('/students/:id', (req, res) => {
    const { id } = req.params
    const { username, age } = req.body
    let user = users.find((item) => item.id == id)
    if (user) {
        user.username = username
        user.age = age
        user.surname = surname
        
        res.status(200)
        return res.json('User updated successfull!')
    } else {
        res.status(400)
        return res.send('User not found with the given Id!')
    }
})




const PORT = 8000//process.env.PORT1 || process.env.PORT2
app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.bold.blue))
const express = require('express')
const gearRouter = require('./routes/gear')
const usersRouter = require('./routes/users')
const port = 1337

const app = express()
app.use(express.json())
app.use('/gear', gearRouter)
app.use('/users', usersRouter)

//routes
app.get('/', (req, res) => {
    res.json({ info: 'Tonerator app: build with Express, Node, and Postgres'
    })
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    const { name, location } = req.body
    res.status(200).send({
        message: `YOUR KEYS WERE ${name}, ${location}`
    })
})


// app.get('/setup', async (req, res) => {
//     try {
//         await pool.query('CREATE TABLE users( id ')
//     } catch (err) {
//         console.log(err)
//         res.sendStatus(500)
//     }
// })


app.listen(port, () => console.log(`Server has started on port ${port}`))
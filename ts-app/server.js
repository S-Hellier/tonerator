const express = require('express')
const pool = require('./db/db')
const port = 1337

const app = express()
app.use(express.json())

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
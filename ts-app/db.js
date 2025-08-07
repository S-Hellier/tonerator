const { Pool } = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'shellier',
    password: 'chopsontop',
    database: 'db123'
})

module.exports = pool
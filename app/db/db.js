const knex = require('knex');
const knexfile = require('./knexfile');

// TODO in prod, use dependency injection to create knex instance so db access
// can be mocked for tests

//TODO in prod don't access knexfile.development directly
// decide with env vars which config to use
const db = knex(knexfile.development);
module.exports = db;

// const { Pool } = require('pg')
// const pool = new Pool({
//     host: 'db',
//     port: 5432,
//     user: 'shellier',
//     password: 'chopsontop',
//     database: 'tonerator'
// });

// module.exports = pool


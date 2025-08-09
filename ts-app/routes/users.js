const express = require('express');
const db = require('../db/db');

const users = express.Router();

users.get('/', async (req, res) => {
    const users = await db('users').select('*');
    res.json(users);
});

users.post('/', async (req, res) => {
    const { email } = req.body;
    const user = await db('users').insert({ email }).returning('*');
    res.json(user);
});

module.exports = users;
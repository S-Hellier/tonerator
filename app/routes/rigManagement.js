const express = require('express');
const db = require('../db/db');

const rigManagement = express.Router();

rigManagement.post('/rig', async (req, res) => {
    const {
        user_id,
        guitar_id,
        amp_id,
        name,
        description,
    } = req.body;

    if (!user_id || !name) {
        return res.status(400).json({
            error: 'Missing required fields: user_id, name',
        });
    }

    try {
        const [created] = await db('rigs')
            .insert({
                user_id,
                guitar_id,
                amp_id,
                name,
                description,
            })
            .returning([
                'id',
                'user_id',
                'guitar_id',
                'amp_id',
                'name',
                'description'
            ]);

            return res.status(201).json(created);
    } catch (error) {
        console.error('Error creating rig: ', error);
        return res.status(500).json({ error: 'Failed to create rig' });
    }
});
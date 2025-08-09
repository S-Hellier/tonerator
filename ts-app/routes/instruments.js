const express = require('express');
const db = require('../db/db');

const instruments = express.Router();

// Create a new guitar
instruments.post('/guitars', async (req, res) => {
  const {
    user_id,
    name,
    brand,
    model,
    year,
    type,
    pickup_config,
    specs,
  } = req.body;

  if (!name || !brand || !model || !pickup_config) {
    return res.status(400).json({
      error: 'Missing required fields: name, brand, model, pickup_config',
    });
  }

  try {
    const [created] = await db('guitars')
      .insert({
        user_id,
        name,
        brand,
        model,
        year,
        type,
        pickup_config,
        specs,
      })
      .returning([
        'id',
        'user_id',
        'name',
        'brand',
        'model',
        'year',
        'type',
        'pickup_config',
        'specs',
        'created_at',
        'updated_at',
      ]);

    return res.status(201).json(created);
  } catch (error) {
    console.error('Error creating guitar:', error);
    return res.status(500).json({ error: 'Failed to create guitar' });
  }
});

module.exports = instruments;
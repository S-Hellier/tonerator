const express = require('express');
const db = require('../db/db');

const gear = express.Router();

// Create a new guitar
gear.post('/guitars', async (req, res) => {
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

gear.post('/amps', async (req, res) => {
  const {
    user_id,
    name,
    brand,
    model,
    year,
    type,
    specs,
  } = req.body;

  if (!name || !brand || !model || !type) {
    return res.status(400).json({
      error: 'Missing required fields: name, brand, model, type',
    });
  }

  try {
    const [created] = await db('amps')
      .insert({
        user_id,
        name,
        brand,
        model,
        year,
        type,
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
        'specs',
        'created_at',
        'updated_at',
      ]);

    return res.status(201).json(created);
  } catch (error) {
    console.error('Error creating amp:', error);
    return res.status(500).json({ error: 'Failed to create amp' });
  }
});

gear.post('/pedals', async (req, res) => {
  const {
    user_id,
    name,
    brand,
    model,
    type,
    version,
    year,
    controls,
  } = req.body;

  if (!name || !brand || !model || !type) {
    return res.status(400).json({
      error: 'Missing required fields: name, brand, model, type',
    });
  }

  try {
    const [created] = await db('pedals')
      .insert({
        user_id,
        name,
        brand,
        model,
        type,
        version,
        year,
        controls,
      })
      .returning([
        'id',
        'user_id',
        'name',
        'brand',
        'model',
      ])
  } catch (error) {
    console.error('Error creating pedal:', error);
    return res.status(500).json({ error: 'Failed to create pedal' });
  }
});

module.exports = gear;
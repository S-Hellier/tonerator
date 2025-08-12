/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.raw(`
    -- Create ENUMs for better data integrity
    CREATE TYPE guitar_type AS ENUM ('electric', 'acoustic', 'bass', 'classical', 'hollow_body', 'semi_hollow');
    CREATE TYPE amp_type AS ENUM ('tube', 'solid_state', 'hybrid', 'modeling');
    CREATE TYPE pedal_type AS ENUM ('overdrive', 'distortion', 'fuzz', 'delay', 'reverb', 'chorus', 'flanger', 'phaser', 'tremolo', 'compressor', 'wah', 'volume', 'tuner', 'looper', 'multi_effect');
    
    -- Add constraints and indexes to guitars table
    ALTER TABLE guitars 
      ALTER COLUMN type TYPE guitar_type USING type::guitar_type,
    
    -- Add constraints and indexes to amps table
    ALTER TABLE amps 
      ALTER COLUMN type TYPE amp_type USING type::amp_type,
    
    -- Add constraints and indexes to pedals table
    ALTER TABLE pedals 
      ALTER COLUMN type TYPE pedal_type USING type::pedal_type,
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw(`
    
    -- Drop ENUMs
    DROP TYPE IF EXISTS guitar_type CASCADE;
    DROP TYPE IF EXISTS amp_type CASCADE;
    DROP TYPE IF EXISTS pedal_type CASCADE;
    DROP TYPE IF EXISTS pickup_config CASCADE;
  `);
};

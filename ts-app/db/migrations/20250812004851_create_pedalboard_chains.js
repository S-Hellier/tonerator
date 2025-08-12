/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pedalboard_chains', (table) => {
    table.increments('id').primary();
    table.integer('rig_id').references('id').inTable('rigs').onDelete('CASCADE');
    table.integer('pedal_id').references('id').inTable('pedals').onDelete('CASCADE');
    table.integer('position').notNullable();
    table.boolean('is_active').defaultTo(true);
    table.jsonb('settings');
    table.timestamps(true, true);
    
    // Ensure unique position per rig
    table.unique(['rig_id', 'position']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pedalboard_chains');
};

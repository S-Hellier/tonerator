/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('amps', (table) => {
    table.increments('id').primary();
    table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
    table.string('name').notNullable();
    table.string('brand').notNullable();
    table.string('model').notNullable();
    table.string('year');
    table.string('type'); // Tube, solid-state
    table.jsonb('specs');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('amps');
};

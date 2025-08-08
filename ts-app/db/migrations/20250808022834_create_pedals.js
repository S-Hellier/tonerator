/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pedals', (table) => {
    table.increments('id').primary();
    table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
    table.string('name').notNullable();
    table.string('brand').notNullable();
    table.string('model').notNullable();
    table.string('type').notNullable(); // Type of pedal: overdrive, distortion, etc
    table.string('version');
    table.string('year');
    table.jsonb('controls');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pedals');
};

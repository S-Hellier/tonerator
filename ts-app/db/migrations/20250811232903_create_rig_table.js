/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('rigs', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.integer('guitar_id').references('id').inTable('guitars');
    table.integer('amp_id').references('id').inTable('amps');
    table.string('name').notNullable();
    table.text('description');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rigs');
};

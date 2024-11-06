/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();
        table.string('question').notNullable();   // Text of the question
        table.specificType('choices', 'TEXT[]').notNullable(); // Array of choices
        table.string('answer').notNullable();     // Correct answer
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
};

'use strict';

function relationsGenerator(nameOfForeignColumn, table, isNullable) {
    if (isNullable) {
        table.integer(`${nameOfForeignColumn}_id`).unsigned();
    } else {
        table
            .integer(`${nameOfForeignColumn}_id`)
            .notNullable()
            .unsigned();
    }

    table
        .foreign(`${nameOfForeignColumn}_id`)
        .references('id')
        .inTable(`${nameOfForeignColumn}`);
}

function baseMethods(table, knex) {
    table
        .dateTime('created_at')
        .notNullable()
        .defaultTo(knex.fn.now());
    table
        .dateTime('updated_at')
        .notNullable()
        .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
}

exports.up = function(knex, Promise) {
    return knex.schema
        .createTableIfNotExists('movie', function(table) {
            table.increments('id').primary();
            table.string('title').notNullable();
        })
        .then(() => {
            return knex.schema.createTableIfNotExists('comment', function(table) {
                table.increments('id').primary();
                table.string('comment')
                table.string('public_ip')
                table.string('utc_date')
                relationsGenerator('movie', table);
                baseMethods(table, knex);
            });
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('movie')
        .then(() => knex.schema.dropTableIfExists('comment'));
};

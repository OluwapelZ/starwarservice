'use strict'

exports.up = function(knex, Promise) {
    return knex.schema
        .hasTable('movie')
            .then(() => {
                return knex('movie')
                    .insert([
                        {id: 1, title: "A New Hope"},
                        {id: 2, title: "Attack of the Clones"},
                        {id: 3, title: "The Phantom Menace"},
                        {id: 4, title: "Revenge of the Sith"},
                        {id: 5, title: "Return of the Jedi"},
                        {id: 6, title: "The Empire Strikes Back"},
                        {id: 7, title: "The Force Awakens"}
                    ]);
            })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('movie');
};
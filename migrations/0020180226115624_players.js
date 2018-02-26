
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', table => {
    table.increments('id')
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};

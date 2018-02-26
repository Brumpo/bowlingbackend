
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments('id')
    table.integer('playerId').notNullable()
    table.foreign('playerId').references('players.id')
    table.integer('turn1')
    table.integer('turn2')
    table.integer('turn3')
    table.integer('turn4')
    table.integer('turn5')
    table.integer('turn6')
    table.integer('turn7')
    table.integer('turn8')
    table.integer('turn9')
    table.integer('turn10')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};

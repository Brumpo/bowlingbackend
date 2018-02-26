
exports.up = function(knex, Promise) {
  return knex.schema.createTable('frames', table => {
    table.increments('id')
    table.integer('gameId')
    table.foreign('gameId').references('games.id')
    table.integer('roll1')
    table.integer('roll2')
    table.integer('roll3')
    table.integer('frameTotal')
    table.integer('frameHold')//1 spare, 2 strike
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('frames')
};

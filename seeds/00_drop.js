exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('frames').del()
    .then(() => knex('games').del())
    .then(() => knex('players').del())
};

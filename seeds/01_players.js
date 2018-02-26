
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').insert([
    {
      id:1,
      firstName: 'Jim',
      lastName: 'Bonicci'
    },
    {
      id:2,
      firstName: 'Jon',
      lastName: 'Dank'
    }
  ])
  .then(function(){
    return knex.raw("SELECT setval('players_id_seq', (SELECT MAX(id) FROM players))")
  })
};

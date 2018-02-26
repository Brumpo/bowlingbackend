
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').insert([
    {
      id:1,
      playerId:1,
      turn1:8,
      turn2:17,
      turn3:27,
      turn4:47,
      turn5:65,
      turn6:73,
      turn7:78,
      turn8:86,
      turn9:92,
      turn10:120
    },
    {
      id:2,
      playerId:2,
      turn1:8,
      turn2:21,
      turn3:29,
      turn4:37,
      turn5:45,
      turn6:53,
      turn7:61,
      turn8:69,
      turn9:77,
      turn10:94
    }
  ])
  .then(function(){
    return knex.raw("SELECT setval('games_id_seq', (SELECT MAX(id) FROM games))")
  })
};


exports.seed = function(knex, Promise) {
  return knex('frames').insert([
    {
      id:1,
      gameId: 1,
      roll1:5,
      roll2:3,
      frameTotal:8,
    },
    {
      id:2,
      gameId: 1,
      roll1:6,
      roll2:3,
      frameTotal:9
    },
    {
      id:3,
      gameId: 1,
      roll1:7,
      roll2:3,
      frameTotal:10,
      frameHold:1
    },
    {
      id:4,
      gameId: 1,
      roll1:0,
      roll2:10,
      frameTotal:10,
      frameHold:1
    },
    {
      id:5,
      gameId: 1,
      roll1:10,
      frameTotal:10,
      frameHold:2
    },
    {
      id:6,
      gameId: 1,
      roll1:5,
      roll2:3,
      frameTotal:8
    },
    {
      id:7,
      gameId: 1,
      roll1:0,
      roll2:5,
      frameTotal:5
    },
    {
      id:8,
      gameId: 1,
      roll1:5,
      roll2:3,
      frameTotal:8
    },
    {
      id:9,
      gameId: 1,
      roll1:6,
      roll2:0,
      frameTotal:6
    },
    {
      id:10,
      gameId: 1,
      roll1:10,
      roll2:10,
      roll3:8,
      frameTotal:8
    },
    {
      id:11,
      gameId: 2,
      roll1:5,
      roll2:3,
      frameTotal:8
    },
    {
      id:12,
      gameId: 2,
      roll1:5,
      roll2:5,
      frameTotal:10,
      frameHold:1
    },
    {
      id:13,
      gameId: 2,
      roll1:3,
      roll2:5,
      frameTotal:8
    },
    {
      id:14,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:15,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:16,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:17,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:18,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:19,
      gameId: 2,
      roll1:0,
      roll2:8,
      frameTotal:8
    },
    {
      id:20,
      gameId: 2,
      roll1:5,
      roll2:5,
      roll3:7,
      frameTotal:17
    }
  ])
  .then(function(){
    return knex.raw("SELECT setval('frames_id_seq', (SELECT MAX(id) FROM frames))")
  })
};

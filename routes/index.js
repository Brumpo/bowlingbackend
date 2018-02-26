var express = require('express');
var router = express.Router();
var frames = require('./frames')
var games = require('./games.js')
var players = require('./players.js')
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')

router.get('/games/:id',games.getGame)

router.get('/games/recent', games.getRecentGames)

router.get('/frames/:gameId', games.getGameFrames)

router.post('/players', players.postPlayers)

router.post('/frames', frames.postFrames)

router.put('/frames', frames.putFrames)

router.put('/players', players.putPlayers)

router.delete('/players/:id', players.deletePlayers)

router.delete('/frames/:id', frames.deleteFrames)

router.delete('/games/:id', games.deleteGames)

module.exports = router

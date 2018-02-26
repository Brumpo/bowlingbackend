var express = require('express');
var router = express.Router();
var frames = require('./frames')
var games = require('./games.js')
var players = require('./players.js')
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')

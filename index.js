// Use ES6
"use strict";

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const _ = require('lodash');
const session = require('express-session')

app.use(
  session({
    secret: 'ez',
    name: "uniqueSessionID",
    saveUninitialized: false,
  })
);

const port = 40030// Dejalo en este puerto por que asilo deje configurado, no quiero que
      // Los bots esten todo el rato escaneando el puerto 3000
http.listen(port, function() {
  console.log('listening on *:'+port);
});

const fs = require('fs')
const cors = require('cors')



var emotes = require('./routes/emotes');
var badges = require('./routes/badges');

var points = require('./routes/points');
var bonfires = require('./routes/bonfires');
var chatters = require('./routes/chatters');

var token = require('./routes/token');

var dashboard = require('./routes/dashboard');
var profile = require('./routes/profile');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.json());
app.use(cors())

app.use('/api/emotes', emotes);
app.use('/api/badges', badges);

app.use('/api/points', points);
app.use('/api/bonfires', bonfires);
app.use('/api/chatters', chatters);

app.use('/api/token', token);

app.use('/dashboard', dashboard);
app.use('/api/profile', profile);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/login", (req, res) => {
  res.render("pages/login");
});


app.post(
  "/authenticate",
  bodyParser.urlencoded(),
  (req, res, next) => {
    console.log(req.body.password)
    console.log(process.env.PASSWORD)
    if (req.body.password == process.env.PASSWORD) {
      next();
    } else res.sendStatus(401);
  },
  (req, res) => {
    req.session.loggedIn = true;
    res.redirect("/dashboard/emotes");
  }
);









const Snake = require('./games/snake/snake');
const Apple = require('./games/snake/apple');

// ID's seed
let autoId = 0;
// Grid size
const GRID_SIZE = 60;
// Remote players 🐍
let players = [];
// Apples 🍎
let apples = [];

/*
 * Serve client
 */
app.use(express.static(path.join(__dirname, 'client')))

app.get('/minigames/snake/:nickname', function(req, res) {
  const nickname = req.params.nickname
  res.render('pages/snake', {
    nickname: nickname
  });
});

app.get('/minigames/agario', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/agario.html'))
});

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

/*
 * Listen for incoming clients
 */
io.on('connection', (client) => {
  let player;
  let id;

  client.on('auth', (opts, cb) => {
    // Create player
    id = ++autoId;
    player = new Snake(_.assign({
      id,
      dir: 'right',
      gridSize: GRID_SIZE,
      snakes: players,
      apples,
      io,
      client
    }, opts));
    players.push(player);
    // Callback with id
    cb({ id: autoId });
  });

  // Receive keystrokes
  client.on('key', (key) => {
    // and change direction accordingly
    if(player) {
      player.changeDirection(key);
    }
  });

  // Remove players on disconnect
  client.on('disconnect', () => {
    _.remove(players, player);
  });
});

// Create apples
for(var i=0; i < 50; i++) {
  apples.push(new Apple({
    gridSize: GRID_SIZE,
    snakes: players,
    apples
  }));
}

// Main loop
setInterval(() => {
  players.forEach((p) => {
    p.move();
  });
  io.emit('state', {
    players: players.map((p) => ({
      x: p.x,
      y: p.y ,
      id: p.id,
      nickname: p.nickname,
      points: p.points,
      tail: p.tail
    })),
    apples: apples.map((a) => ({
      x: a.x,
      y: a.y
    }))
  });
}, 500);
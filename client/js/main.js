GameCanvas = (function () {
  /*
      Constructor
    */
  function GameCanvas(canvas) {
    var ratio =
      window.innerWidth < window.innerHeight
        ? window.innerWidth
        : window.innerHeight;

    this.canvas = canvas;
    this.canvas.width = this.canvas.height = ratio;
    this.context = this.canvas.getContext("2d");
    this.gridSize = 60;
    this.cellSize = ratio / this.gridSize;

    $("#players").css("left", this.canvas.width - 180 + "px");
  }

  /*
      Render game canvas & draw players, apples & scores
    */
  GameCanvas.prototype.draw = function (players, apples) {

    var context = this.context;
    var cellSize = this.cellSize;
    // ajustamos el texto que saldra arriba de los jugadores (nickname)
    context.textAlign = "center";
    context.font = "bold 16px Arial";

    // Render background
    this.context.fillStyle = "#363435";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Reset player table
    $("#players").text("");

   /* if (players.length > 1) {
      $("#players").show();
    } else {
      $("#players").hide();
    }

    $("#players")
      .append($("<span>").text("Jugadores"))
      .append($("</br>"))
      .append($("<span>").text("-------------------------"))
      .append($("</br>"));*/

    // Ordenar tabla por puntos, mayor a menor
    players = players.sort(function (playerA, playerB) {
      return playerB.points - playerA.points;
    });

    // Render scores
    players.forEach((p) => {
      // scores
    /*  if (p.id === playerId) {
        $("#nickname").text(p.nickname);
        $("#points").text("Puntos: " + p.points);
      }

      $("#players")
        .append($("<span>").text(p.nickname + ": " + p.points).css('color',getUsernameColor((p.nickname))))
        .append($("</br>"));
        */
      if (p.id === playerId) {
        context.fillStyle = "#fff217";
      }else{
        context.fillStyle = getUsernameColor(p.nickname);
      }

      context.fillRect(p.x * cellSize, p.y * cellSize, cellSize, cellSize);

      //mmm se me ocurre poner el nombre del player encima del mismo
      // osea viene con eso, yo se lo quite xdddd, oseaa es que queria implementarlo en
      // tails
      p.tail.forEach((t) => {
        context.fillRect(t.x * cellSize, t.y * cellSize, cellSize, cellSize);
      });
    });

    // Render apples
    apples.forEach((a) => {
      context.fillStyle = "#ff0000";
      context.fillRect(a.x * cellSize, a.y * cellSize, cellSize, cellSize);
    });

    // Render Grid

    context.strokeStyle = "#222";
    context.lineWidth  = 1; 
    context.stroke();
    
    for (let x = 0; x < this.canvas.width; x += this.cellSize) {
      context.moveTo(x, 0);
      context.lineTo(x, this.canvas.height);
    }
    
    for (let y = 0; y < this.canvas.height; y += this.cellSize) {
      context.moveTo(0, y);
      context.lineTo(this.canvas.width, y);
    }

    // Render usernames
    players.forEach((p) => {
      if (p.id === playerId) {
        context.fillStyle = "#fff217";
      }else{
        context.fillStyle = getUsernameColor(p.nickname);
      }
      context.fillText(p.nickname, p.x * cellSize, p.y * cellSize - 10); // colocamos el nombre del jugador encima de su snake
      
    });
  };

  return GameCanvas;
})();

/*
    Initialize Game
  */

var socket = io();
var playerId;

const eatSfx = new Audio("/sounds/eat.mp3");
const killSfx = new Audio("/sounds/kill.mp3");

eatSfx.volume = 0.1
killSfx.volume = 0.1

// Authenticate


if (nickname && nickname !== "") {
  socket.emit("auth", { nickname }, (session) => {
    playerId = session.id;
    console.log("new session: " + playerId);
  });
}

// Create & insert canvas
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Create game with canvas
var game = new GameCanvas(canvas);

// Send keystrokes
document.onkeydown = (ev) => {
  socket.emit("key", ev.keyCode);
};

// Receive state from server
socket.on("state", (stuff) => {
  // and redraw the game
  game.draw(stuff.players, stuff.apples);
});


// Receive state from server
socket.on("sound", (sfx) => {
  switch (sfx) {
    case 'eat':
      eatSfx.play();
      break;
  
    case 'kill':
      killSfx.play();
      break;
  }
});
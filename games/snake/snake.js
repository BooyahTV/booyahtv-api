// Use ES6
"use strict";

const _ = require('lodash');

// Key maps
const KEYS = {
  up: 38,
  right: 39,
  down: 40,
  left: 37,

  up2: 87,
  right2: 68,
  down2: 83,
  left2: 65,
};

/*
 * Snake class
 */
class Snake {
  constructor(options) {
    _.assign(this, options);
    this.respawn();
  }

  changeDirection(key) {

    if (key == KEYS.up || key == KEYS.up2) {
      if (this.dir !== 'down')
        this.dir = 'up';
    }else if(key == KEYS.right || key == KEYS.right2) {
      if (this.dir !== 'left')
        this.dir = 'right';
    }else if(key == KEYS.down || key == KEYS.down2) {
      if (this.dir !== 'up')
        this.dir = 'down'; 
    }else if(key == KEYS.left || key == KEYS.left2) {
      if (this.dir !== 'right')
        this.dir = 'left'; 
    }
  }

  move() {
    // Update tail
    for(var i = this.tail.length-1; i >= 0; i--) {
      this.tail[i].x = (i===0) ? this.x : this.tail[i-1].x;
      this.tail[i].y = (i===0) ? this.y : this.tail[i-1].y;
    }

    // Move head
    switch(this.dir) {
      case 'right':
        this.x++; break;
      case 'left':
        this.x--; break;
      case 'up':
        this.y--; break;
      case 'down':
        this.y++; break;
    }

    // Check boundaries
    if(this.x > this.gridSize-1) this.x = 0;
    if(this.x < 0) this.x = this.gridSize-1;
    if(this.y > this.gridSize-1) this.y = 0;
    if(this.y < 0) this.y = this.gridSize-1;

    // Collission detection
    this._checkCollisions();
  }

  _checkCollisions() {
    // With other snakes (including ours)
    this.snakes.forEach((snake) => {
      // Heads except ourself
      if(snake !== this) {
        if(snake.x === this.x && snake.y === this.y) {
          // The bigger survives  
          // ToDo: 3 outcomes
          // - Same length = both die
          if(this.tail.length < snake.tail.length) {
            this.respawn(); // mata a mi snake
            this.client.emit('sound', 'kill')
          } else {
            snake.respawn(); // mata a la otra snake  
            this.client.emit('sound', 'kill')
          }
        }
      }
      // Tails
      snake.tail.forEach((t) => {
        if(t.x === this.x && t.y === this.y) {
          // The bigger survives
          // ToDo: 3 outcomes
          // - Same length = both die
          if(snake !== this && this.tail.length < snake.tail.length) {
            this.respawn();
            this.client.emit('sound', 'kill') // TODO: test
          } else {
            snake.respawn();
          }
        }
        //TODO: hacer que se muera al colicionar head => tail
      });
    });
    // With apples
    this.apples.forEach((a) => {
      if(a.x === this.x && a.y === this.y) {
        this._addPoint(1);
        this.client.emit('sound', 'eat')
        this._addTail();
        a.respawn();
      }
    });
  }

  respawn() {
    this.tail = [];
    this.points = 0;
    this.x = Math.random() * this.gridSize | 0;
    this.y = Math.random() * this.gridSize | 0;
  }

  _addPoint(p) {
    this.points += p;
  }

  _addTail() {
    this.tail.push({x: this.x, y: this.y});
  }
}

module.exports = Snake;


const GRAVITY = 9.81;

// class inheritance

class GameObject {
    x = 0; moveX = 0;
    y = 0; moveY = 0;
    move(){
        this.x += this.moveX;
        this.y += this.moveY;
    }
}

class Ball extends GameObject {
    moveX = 10;
    diameter = 10;
}

class Paddle extends GameObject {
    width  = 100;
    height = 10;
    move(){
        this.y += this.moveY;
    }
}

let ball = new Ball();
    ball.move();

let paddle = new Paddle();
    paddle.move();

// Q: can an object inherit from 2 classes
// A: no it can't and by that i mean
//       of course it can :D have a look at the
//       MIXIN     pattern
//       INTERFACE pattern

// Tomorrow:
//   Destructuring Assignments,
//    => fun with parameters

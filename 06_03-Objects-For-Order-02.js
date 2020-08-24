
// modern form
class GameObject {
    x = 0
    y = 0
    moveX(){
        this.x += 10;
    }
}

let ball    = new GameObject();
let paddle1 = new GameObject();
let paddle2 = new GameObject();

let all = [ball,paddle1,paddle2];

all.forEach( o => o.moveX() );


// in dinosaur form
function GameObject () {
    this.x = 0;
    this.y = 0;
    this.moveX = function (){
        this.x += 10;
    }
}

let ball    = new GameObject();
let paddle1 = new GameObject();
let paddle2 = new GameObject();

let all = [ball,paddle1,paddle2];

all.forEach( o => o.moveX() );

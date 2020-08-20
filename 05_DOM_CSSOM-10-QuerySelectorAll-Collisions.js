
for ( let i = 0; i < 100; i++ ){
    const div = document.createElement('div');
    div.innerText = '???' + i;
    document.body.append(div);
}

const divs = document.querySelectorAll('div');
// =>  this is a NodeList use Array.from(divs)
//     to convert it into a real array
console.log(divs);

//divs.forEach(
    //                  yyyyyyyyyyyyy    xxxxxxxxxxxxxx
//    div => console.log( div.offsetTop,   div.offsetLeft,
//                        div.offsetWidth, div.offsetHeight
//    )
//);

// v p1 = [ offsetLeft, offsetTop ]
// +-------------| ^
// |<offsetWidth>| offsetHeight
// |-------------+ v
//               ^ p2 = [ offsetLeft + offsetWidth, offsetTop + offsetHeight ]

const ballDiameter = 10;
let   ballX        = 5;
let   ballY        = 1023;

function ballCollidesWithRect ( left, top, width, height ) {
    return (
        ballX > left          &&
        ballX < left + width  &&
        ballY > top           &&
        ballY < top  + height
    );
}

divs.forEach( // each div would be a block or paddle in our game
    brick => {
        const collides = ballCollidesWithRect(
            brick.offsetLeft,
            brick.offsetTop,
            brick.offsetWidth,
            brick.offsetHeight
        );
        if ( collides ){
            console.log(div);
        }
    }
);
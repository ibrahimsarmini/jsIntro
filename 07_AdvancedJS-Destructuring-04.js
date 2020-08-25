
let arr = ['red','green','yellow','white',['pink']];

function printFirstColorWithoutDestr ( arr ) {
    let [color] = arr;
    // or: let color = arr[0];
    console.log(color);
}


//                         vvvvvvv first parameter
function printFirstColor ( [color] ) {
    //                      ^^^^^ take the first value
    console.log(color);
}

function printSecondColor ( [,color] ) {
    console.log(color);
}

// you can also net arrays VVVVVVV
function printPink ( [,,,,[color]] ) {
    console.log(color);
}

printFirstColor(arr);
printSecondColor(arr);
printFirstColor( ['black'] );
printPink(arr);
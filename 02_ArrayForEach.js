
var classNames = ['anx',1,2,3,[]];

// classNames.forEach( hiToEach );

myForEach( classNames, hiToEach );

function hiToEach ( name ){
    console.log(`hi ${name}`);
}

function myForEach ( theArray, theCallback ){
    for ( let i = 0; i < theArray.length; i++ ){
        theCallback( theArray[i], i );
    }
}


var allPricesBeforeCorona = [ 119, 21.3, 23.4, 5.6, 6.7, 3.4 ];

function calculateNewPrice ( price ) {
    return Math.round( ( price / 1.19 ) * 1.16) - 0.01;
}

var allPricesAfterCorona = allPricesBeforeCorona.map( calculateNewPrice );

console.log( allPricesAfterCorona );
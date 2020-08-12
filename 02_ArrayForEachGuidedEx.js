
var allPricesBeforeCorona = [ 119, 21.3, 23.4, 5.6, 6.7, 3.4 ];

function calculateNewPrice ( price ) {
    return Math.round( ( price / 1.19 ) * 1.16) - 0.01;
}

var allPricesAfterCorona = allPricesBeforeCorona.map( calculateNewPrice );

console.log( allPricesAfterCorona );
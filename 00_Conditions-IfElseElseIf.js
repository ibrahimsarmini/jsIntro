
// true  = 1
// false = 0
// binary system

//   = assign (not a comparison)
//  == equal
// === strict equal     <<< use this
// !== not strict equal <<< use this
//  != not equal
//   ! not ( turns true into false and the other way around false to true)

/*
var passwordInput     = prompt('password');
var password          = '12345';
var passwordIsCorrect = passwordInput === password;

if ( passwordIsCorrect ){
    console.log('welcome to the matrix');
} else { // << optional
    console.log('access denied');
}
*/

var theNumber = prompt('enter the secret number');

if ( theNumber == 42 ) {
    console.log('the answer to the universe everything and all the rest');

    if ( theNumber === '42' ) {
        console.log('its the string');
    }
}

else if ( theNumber == 23 ) {
    console.log('nothing is true, everything is permitted');
}

else if ( theNumber == 12 ) {
    console.log('the good and fair random number');
}

else {
    console.log('some random number with no meaning');
}

console.log('im done here');

// switch
// case
// break

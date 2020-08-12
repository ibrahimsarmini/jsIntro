
// String::split( separator )
//  ( turn a string into an array dividing it wherever we find the separator )

// Array::join( glue )
//  ( turn an array into a string, use glue to fill the gaps )

// Turn this into an Array of (real) Numbers

var theString = '123456789';

let theArray = theString.split('');

function convertToNumber( string ) {
    return number = Number(string);
    // Number()     - Will have decimal places - preferred nowadays
    // parseInt()   - Will CUT  decimal places
    // parseFloat() - Will have decimal places
    // JSON.parse() - Will have decimal places
    // using +string is frowned upon :D
}

console.log( theArray );
theArray.map( convertToNumber );



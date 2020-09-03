
// inside our browser we have a nice little
//   database that we can use to store data
//   for our webpages, games and apps

localStorage.clear()             // delete everything
localStorage.setItem(key, value) // save a {value} under the {key} 
localStorage.getItem(key)        // get {value} from the database that has {key}
localStorage.removeItem(key)     // delete {key} and it's {value} from the database

// but localStorage has problem, it cant save arrays
// or objects, it just uses Strings
// BUT: there is a solution JSON to the rescue

JSON.stringify ( value  ) // turns a JS value into a String (as good as it can!)
JSON.parse     ( string ) // turns a JSON string back into a JS value

// In reality we often use it like this:

localStorage.setItem( "users", JSON.stringify([{name:"anx"}]) );

JSON.parse( localStorage.getItem("users") );

let json  = localStorage.getItem("users");
let users = JSON.parse(json);

// In even realer reality we write shortcuts for that like:

function SET (key, value) {
    localStorage.setItem( key, JSON.stringify( value ) );
}

function GET (key) {
    return JSON.parse( localStorage.getItem( key ) );
}

SET( 'users', [{name:'anx'}] );
GET( 'users' );
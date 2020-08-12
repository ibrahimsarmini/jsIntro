
var allNames = ['jan','carl','joe','bob','alice'];

var greetingMessage = allNames.reduce( addName, 'Welcome ' );

function addName( lastGreetingMessage, name ){
    console.log(lastGreetingMessage);
    return lastGreetingMessage + name + ' ';
}

console.log( greetingMessage );
console.log( greetingMessage + 'to DCI!' );
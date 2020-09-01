
class Horse {
    name = 'ette'

    constructor (horseName) {
        this.name = horseName;
    }

    say(){
        console.log("I'm", this.name);
    }
 
    getBoundSayArrow(){
        return () => { this.say() }
    }

    getBoundSayFunction(){
        return function () { this.say() }
    }

}

class Bunny {
    name    = 'itte'
    surname = 'buns'

    say(){
        console.log( this.name, this.surname );
    }

}

let h1 = new Horse('fred');  // h1 is a Horse
let h2 = new Horse('alice'); // h2 is a Horse

let b1 = new Bunny('bob');   // b1 is a Bunny
let b2 = b1;                 // << same as b1

h1.say();
h2.say();

// b1 has no constructor, but we can still cange the name
b2.name = 'bobby';
// BUT: changing stuff from the outside is very bad style

// vv who    vv what()
   b2.       say();
// ^^ object ^^ verb()

console.log('^^^^^vvvvvvvvvvvvv^^^^^')

// runs immedeatly and forces {this} to h1
b1.say.call(h1);

// we glue h1 to a b1's say function for later
let boundSay = b1.say.bind(h1);

boundSay.call(h2);

let sayArrow    = h1.getBoundSayArrow();
let sayFunction = h1.getBoundSayFunction();

sayArrow();
sayFunction();

class Talker {

    name = "asd"

    constructor( name ){
        this.name = name;
        this.sayHi = this.sayHi.bind(this);
        this.arrowedHi = ()=> this.sayHi();
        // for fat arrow functions this will
        // always be the context they were written in
    }

    sayHi () {
        let name = this
          ? this.name
          : 'a function without context';
        console.log('Hello says',name);
    }

}

let alice = new Talker('Alice');
let bob   = new Talker('Bob');

alice.sayHi();                    // alice is the context (this)
bob  .sayHi();                    // bob   is the context (this)
Talker.prototype.sayHi.call(bob); // << force a different context (this)
alice.sayHi.call(bob);            // << force wont work because of bind ( :8 )
//                                            means look at line 8 ^^^^

let referenceToSayHi1 = Talker.prototype.sayHi;
let referenceToSayHi2 = alice.sayHi;

referenceToSayHi1()
referenceToSayHi2()

let fakeTalker = {
    name: "A Fake",
    sayHi: referenceToSayHi1
}

fakeTalker.sayHi(); // context is last-before-dot

let sayHiToBob = Talker.prototype.sayHi.bind(bob);

window.name = 'the window object';
// i set this property so my say hi function
//  would get a meaningful result if called wrongly
setInterval( bob.arrowedHi, 1000 );

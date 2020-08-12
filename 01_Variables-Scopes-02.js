
var bob = 1123;

function firstCase(){
    var bob = 1232;
    console.log(bob);
}

function secondCase(){
    bob = 2343;
    console.log(bob);
}

function thirdCase(){
    let bob = 34;
    console.log(bob);
}

function fourthCase(){
    bob = 2222;
    console.log(bob);
}

function fifthCase(bob){
    console.log(bob);
}

firstCase();
secondCase();
thirdCase();
fourthCase();
fifthCase();
console.log(bob);

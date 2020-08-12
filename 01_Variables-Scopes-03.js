
var alice = 23;

function outer(){

    var alice;

    console.log(alice);

    function inner(){
        console.log(alice);
    }

    inner();
}

console.log(alice);

outer();
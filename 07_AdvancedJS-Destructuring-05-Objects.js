
let o = {
    name: 'anx',
    age:  36,
    hobbies: {
        best: 'lea',
        lessImportant: 'code',
        games: ['no mans sky','fortnite','elite 4']
    },
    array: [1,2,3]
};

function printPersonalData ({
    name,
    age,
    hobbies: { // < this will NOT declare a hobbies variable
        best,
        lessImportant,
        ...rest
    },
    array:[first]
}){
    console.log( 'name ::', name );
    console.log( 'age  ::', age  );
    console.log( ' best  hobby  ::', best  );
    console.log( ' other hobby  ::', lessImportant );
    console.log( ' more hobbies ::', rest)
    console.log( ' random num   ::', first)

    // console.log( hobbies ); // does not work
}

printPersonalData(o);
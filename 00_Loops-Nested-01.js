console.log(`
███╗   ██╗███████╗███████╗████████╗███████╗██████╗ 
████╗  ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██╔██╗ ██║█████╗  ███████╗   ██║   █████╗  ██║  ██║
██║╚██╗██║██╔══╝  ╚════██║   ██║   ██╔══╝  ██║  ██║
██║ ╚████║███████╗███████║   ██║   ███████╗██████╔╝
╚═╝  ╚═══╝╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═════╝ 
`);

/*
    The basic idea of a nested loop
      is to run a loop within another loop
*/

for ( let i = 0; i < 10; i++ ) {
    // outer and inner loop need their own iterator variables
    // this level is the outer loop, it uses {i}
    console.log('outer loop at ' + i);
    // while the outer loop only makes one turn
    for ( let j = 0; j < 3; j++ ) {
        // this is the inner loop it uses {j}
        console.log('  inner loop at ' + j);
        // j => 0,1,2    
    }
    // the inner loop wil have made 3 loops
}

console.log(`
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗███╗   ██╗███████╗██████╗ 
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║████╗  ██║██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██████╔╝██║██╔██╗ ██║█████╗  ██║  ██║
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██║██║╚██╗██║██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║██║ ╚████║███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚═════╝                                                                  
`)

/*
    The inner an outer loop can
        interact with each other
*/

for ( let i = 0; i < 10; i++ ) {
    console.log('---------------------');
    for ( let j = 0; j < 3; j++ ) {
        const sum = i + j; // <<< sum is created here
        //    sum = 123; !! would not work
        console.log('combined ' + sum);
    } // <<< sum is deleted here
}

console.log(`
 █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝
███████║██████╔╝██████╔╝███████║ ╚████╔╝ 
██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  
██║  ██║██║  ██║██║  ██║██║  ██║   ██║   
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
`);

let outerArray = [];

for ( let i = 0; i < 10; i++ ) {
    outerArray[i] = [];
    for ( let j = 0; j < 3; j++ ) {
        const innerArray = outerArray[i];
        innerArray[j] = j;
    }
}

console.log(outerArray);

console.log(`
███████╗███████╗██████╗ ██╗ █████╗ ██╗     
██╔════╝██╔════╝██╔══██╗██║██╔══██╗██║     
███████╗█████╗  ██████╔╝██║███████║██║     
╚════██║██╔══╝  ██╔══██╗██║██╔══██║██║     
███████║███████╗██║  ██║██║██║  ██║███████╗
╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
`);

// You have a company building laptops
//   you have to assign serial numbers to every laptop

//   DBP-
//     0001
//       0001 - DBP-0001-0001
//       0002 - DBP-0001-0002
//       0003 - DBP-0001-0002
//       ...
//     0002
//       0001 - DBP-0002-0001
//       0002 - DBP-0002-0002
//       0003 - DBP-0002-0003
// ...

let productLine = 'DBP';

for ( let batch = 1; batch < 1000; batch++ ) {
    // in the outer loop were not actually creating a serial
    // number, were just starting a new batch
    for ( let item = 1; item < 1000; item++ ) {
        // inside a batch we create serial numbers
        // with the inner loop
        console.log(
            productLine +
            '-' +
            batch.toString().padStart(3,'0') +
            '-' +
            item.toString().padStart(3,'0')
        )
        // (number).toString() - turn a number into a string
        // (string).padStart() - prepends something to a string
    }
}

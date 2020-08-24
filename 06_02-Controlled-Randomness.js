console.log(
    ( 5 + Math.random() * 10 ) *
    ( Math.random() > .5 ? 1 : -1 )
)

/*
|=== random speed ======= | ==== random direction ========== |
|--5--| -- random ------- |  * (                     -1 or 1 )
(  5  + Math.random() * 5 )  * ( Math.random() > .5 ? 1 : -1 )

( fixedMinumimum + randomExtra ) * randomSign
         5              |             |
             Math.random() * 5        |
                            Math.random() > .5 => -1
                                          < .5 =>  1
*/
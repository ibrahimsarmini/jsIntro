var first  = 12;
var second = 12;
var third  = 24;

if ( first < second && first < third ){
    console.log(first);
}

else if ( second < first && second < third ){
    console.log(second);
}

else if ( third < first && third < second ){
    console.log(third);
}
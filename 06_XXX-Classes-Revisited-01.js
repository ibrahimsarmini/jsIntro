
class Stock {

    name  = ""     // <<<< instance property
    price = 123.12 // <<<< instance property
    
    // special, needs this name, but: optional
    constructor ( name, price ) {
        this.name  = name;
        this.price = price;
        Stock.all.push(this);
    }

    getUpdatedPrice () {
        fetch(`https://api.stocks.com/${name}`)
        .then( response => response.json() )
        .then( result =>
            this.price = result.currentPrice // << resposnibility of the method
        ) // ^^^^^^^^^
    }

    // static all = [];
    // static updateAll(){ Stock.all.forEach( stock => stock.getUpdatedPrice() ) }
} //   V working draft does not work everywhere
//     V rather use this V

Stock.updateAll = () => {
    Stock.all.forEach( stock => stock.getUpdatedPrice() );
}

Stock.all = [];

// CREATING AN INSTANCE:
//              VV constructor  VVVVVV parameters
let apple = new Stock           ( 'aapl', 99 );
//          ^^^ create a new object (IMPORTANT1111!!!!)
let msft  = new Stock ( 'msft', 0.01 );
let spcx  = new Stock ( 'spcx', 100000000000.0 );

Stock.updateAllPrices();

setInterval( Stock.updateAll, 60000 );

// setInterval( apple.getUpdatedPrice, 60000 );
// WROOOONG: this would forget about the apple
//           context because we only give
//           a reference to the function, NOT the object
// see 06_XXX-Classes-Revisited-02

setInterval( apple.getUpdatedPrice(), 60000 );
// WROOOONG:                      ^^
// this way we would call the function immedatly
// and give setInterval whatever getUptatedPrice returns
//   aaand it returns: undefined ( returns nothing )
// see 06_XXX-Classes-Revisited-02

// Classes can be extended

class Bitcoin extends Stock {
    // nothing is true, everything's permitted

    price = 10000.0                // << override property
    title = "Bitcoin"              // << add property
    level = "dangerously volatile" // << add property

    constructor(){
        super( 'btc', 9500.0 ) // << Stock constructor
        // constructor's are always optional,
        // BUT: calling a super constructor is NOT
    }

    getUpdatedPrice () { // override super classes function
        fetch(`https://api.bitcoinexchange.com/${name}`)
        .then( response => response.json() )
        .then( result =>
            this.price = result.priceNow // << resposnibility of the method
        ) // ^^^^^^^^^
    }

    buy(){ // add functions

    }

    sell(){ // add functions

    }
}

class Stock {

    id      = String
    price   = Number

    history = [{
        date  : Date,
        price : Number
    }];

    constructor ( id ) {
        this.id      = id;
        this.price   = Math.random() * 1000;
        this.history = [
            { date: ( new Date() ), price: Math.random() * 1000 },
            { date: ( new Date() ), price: Math.random() * 1000 }
        ]; // << this would be individual to each stock
    }
}

class BoughtStock extends Stock {

    boughtAt = 0
    quantity = 0

    constructor ( id, quantity ) {
        super( id );

        this.quantity = quantity;
        this.boughtAt = this.price;

        // replace this to use Portfolio::addBoughtStock
        PORTFOLIO.stocks.push(this);
    }
}

class Portfolio {

    cash    = 1000000
    balance = 1000000 

    constructor(){
        this.stocks = []
    }

    addBoughtStock (boughtStock){
        // complete this function
    }

    recaclulateBalance (){
        // complete this function
    }
}

const PORTFOLIO = new Portfolio();

let b1 = new BoughtStock('aapl');
let b2 = new BoughtStock('spcx');

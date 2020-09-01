
class Stock {

    id      = String
    price   = Number

    history = [{
        date  : Date,
        price : Number
    }];

    constructor ( id ) {
        this.id      = id;
        this.price   = Math.random() * 1000
        this.history = [
            { date: ( new Date() ), price: 233 },
            { date: ( new Date() ), price: 123 }
        ]; // << this would be individual to each stock
    }
}

class BoughtStock extends Stock {

    boughtAt = 0
    quantity = 0

    constructor ( id, quantity ) {
        super( id );

        this.quantity = quantity;

        PORTFOLIO.stocks.push(this);

    }
}

/*
const Portfolio = {
    cash    : 1000000,
    balance : 1000000,
    stocks  : []
}
*/

class Portfolio {
    cash    = 1000000
    balance = 1000000
    constructor(){
        this.stocks = []
    }
}

const PORTFOLIO = new Portfolio();



class Stock {
    price = 0
    id    = ''
}

class BoughtStock extends Stock {
    boughtAt = 0
    quantity = 0
    constructor () {
        PORTFOLIO.stocks.push(this);
    }
}

class Portfolio {
    cash    = 1000000
    balance = 1000000
    constructor(){
        this.stocks = [] 
    }
}

const PORTFOLIO = new Portfolio();

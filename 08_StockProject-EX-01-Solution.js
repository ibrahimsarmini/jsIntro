
class Stock {
    price = 99
    id    = 'aapl'
    history = [{
        date: new Date(),
        price: 0
    }]
}

class BoughtStock extends Stock {
    boughtAt = 89
    quantity = 100
}

class Portfolio {
    cash    = 1000000
    balance = 1000000
    stocks  = [] 
}


class Stock {
    price = 0
    id    = ''
    history = [{
        date: new Date(),
        price: 0
    }]
}

class BoughtStock extends Stock {
    boughtAt = 0
    quantity = 0
}

class Portfolio {
    cash    = 1000000
    balance = 1000000
    stocks  = [] 
}

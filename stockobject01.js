var stocks = {
    stockSymbols: ["IBM","ZM","WORK"],
    stockPrices: [139.19, 103.27, 26],
    stockShares: [20, 40, 80],
    
    portfolioTotal: 0,
    
    totalValue: function() {
        for(var i = 0; i < this.stockSymbols.length; i++) {
            this.portfolioTotal = this.portfolioTotal+this.stockPrices[i] * this.stockShares[i];
        }
        return this.portfolioTotal;
    }
};

console.log("The total portfolio value is", stocks.totalValue());
// object has stock symbol, prices, quantity, and methid that calculates and displays totalportfolio value 

// starbucks SBUX 84.22
// sxp semiconductors NXPI 98.17
// Facebook FB 188.83


var stockObject = {
    symbol: ["SBUX","FB","NXPI"],
    prices: [84.22, 188.83, 98.17],
    quantity: [500,700,900],
    value: function(){
       for(var i = 0; i < this.symbol.length; i++){
            var total = this.prices[i] * this.quantity[i];
         console.log(this.symbol[i], "has sold a total of", total.toLocaleString('en-us', {style: 'currency', currency: 'USD'}), "in stock,", this.quantity[i], "shares were sold!");
    
       }
        
    }
   
        
    
    
};
console.log(stockObject.value());
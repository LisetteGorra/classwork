var carObject = {
    types: ["Camry", "Audi", "Camaro"],
    dailyRate: [20, 30, 40],
    daysRented: [2, 3, 4],
    total: 0,
    totalRevenue: function () {
        for(var i = 0; i < this.dailyRate.length; i++){
           this.total = this.total + this.dailyRate[i]*this.daysRented[i];
        }
        return this.total;
    }
};
console.log("The total revenue for all cars rented is", carObject.totalRevenue().toLocaleString('en-us', {style: 'currency', currency: 'USD'} ));
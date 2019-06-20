var carObject = {
    types: ["Camry", "Audi", "Camaro"],
    dailyRate: [35, 56, 85],
    daysRented: [5, 10, 17],
    totalRevenue: function () {
        for(var i = 0; i < this.dailyRate.length; i++){
            var total = this.dailyRate[i]*this.daysRented[i];
        }
        return total;
    }
};
console.log("The total revenue for all cars rented is", carObject.totalRevenue().toLocaleString('en-us', {style: 'currency', currency: 'USD'} ));
var rentalCar = {
    totalDaysRented: 30,
    dailyRate: 50,
    carType: "Sedan",
    taxRate: .07,
    totalBill: function (){
        return (this.totalDaysRented * this.dailyRate) + ((this.dailyRate * this.totalDaysRented) * this.taxRate);
        
    }
   
};

console.log(rentalCar.totalBill().toLocaleString('en-us', {style: 'currency', currency: 'USD'}));

// console.log("Your total bill for your rental car is:", bill.toLocaleString('en-us', {style: 'currency', currency: 'USD'})+ "!" );

// .toLocaleString('en-us', {style: 'currency', currency: 'USD'})+ "!" 
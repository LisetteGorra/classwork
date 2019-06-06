var rentalCar = {
    totalDaysRented: 30,
    dailyRate: 50,
    carType: "Sedan",
    taxRate: .07
};

var bill = (rentalCar.totalDaysRented * rentalCar.dailyRate) + ((rentalCar.dailyRate * rentalCar.totalDaysRented) * rentalCar.taxRate);
console.log("Your total bill for your rental car is:", bill.toLocaleString('en-us', {style: 'currency', currency: 'USD'})+ "!" );

// .toLocaleString('en-us', {style: 'currency', currency: 'USD'})+ "!" 
var rentalCar = {
    totalDaysRented: 30,
    rate: 50,
    carType: "Sedan",
    taxRate: .07
};

var bill = (rentalCar.totalDaysRented * rentalCar.rate) + ((rentalCar.rate * rentalCar.totalDaysRented) *rentalCar.taxRate);
console.log(bill);
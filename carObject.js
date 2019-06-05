var carRentalObject = {
    make: "Toyota",
    model: "Camry",
    dailyRate: 45,
    daysRented: 7
}

function totalBill(price, days){
    var taxRate = .07;
    var totalwithTax = (carRentalObject.dailyRate * carRentalObject.daysRented) * taxRate + (carRentalObject.dailyRate * carRentalObject.daysRented);
    return totalwithTax;
}
console.log(totalBill(45, 7));
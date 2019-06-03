// storing information and data 

var variables = "info";

var infoArray = ["info1", 12, "info2", 25, "info3"];

var infoObject = {
    //keys: values
    info1: "Arnell",
    number1: 12,
    info2: "Bubba",
    number2: 25
};

var hotel = {
    hotelRoom: 101,
    bedType: "Twin",
    roomPrice: 35,
    daysBooked: 5
};

var hotelBill = hotel.roomPrice * hotel.daysBooked;
console.log(hotelBill);

var salesTax = .08;

var totalTaxPrice = hotelBill * salesTax;
console.log(totalTaxPrice);

var totalBill = totalTaxPrice + hotelBill;
console.log(totalBill);

// psuedo code for resolutions
//for loop i = 1
//if i % 2 = 0 || if 1 % 2 = 1, then console.log("Number here!")
//else console.log("String or something else here!")
// or you can write this shorter ...example below 

// if (typeof infoArray[i] = "string") {
    
// }

// var infoNumbers = [12, 25, 10];
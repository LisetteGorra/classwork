var hotel = {
    hotelRoom: 101,
    bedType: "Twin",
    roomPrice: 35,
    daysBooked: 5
};

function totalBill(price, days){
    var tax = .08;
    var total = (hotel.daysBooked * hotel.roomPrice) * tax + (hotel.daysBooked * hotel.roomPrice);
    return total;
}
console.log("Thank you for staying with us! Your total bill is:", totalBill(35, 5).toLocaleString('en-us', {style: 'currency', currency: 'USD'})+"!");


//Create an object for an airline that uses a least one method to book a flight

var bookFlight = {
    airline: "Delta",
    ticketPrice: 250,
    taxRate: .08,
    luggage: 25,
    daysGone: 3,
    booking: function(){
        return ((this.ticketPrice * this.taxRate) + (this.ticketPrice) + this.luggage);
    }
}
console.log("Your total for this booked flight comes to:", bookFlight.booking().toLocaleString('en-us', {style: 'currency', currency: 'USD'}));
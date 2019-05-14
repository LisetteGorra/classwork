var guestList = "Lisette Nicole Arnell Joseph Jason";

var arrayGuestList = guestList.split(" ");

var i;

var counter = 0;

for (i = 0; i < arrayGuestList.length; i++ ) {
    if ( arrayGuestList[i] == "Nicole") {
        counter++;
        if (counter == 1) {
            console.log("Found", arrayGuestList[i], "in position", i +1);
        }
    }
}

var guestList = "Lisette Nicole Arnell Joseph Jason Nicole";

var arrayGuestList = guestList.split(" ");

var i;

var counter = 0;

for (i = 0; i < arrayGuestList.length; i++ ) {
    if ( arrayGuestList[i] == "Nicole") {
        counter++;
        if (counter == 2) {
            console.log("Found", arrayGuestList[i], "a second time, in position", i +1);
        }
    }
}

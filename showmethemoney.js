// person recieved $1 on day one. And that dollar doubles for everyday for the rest of the month. 
// how much money do you have at the end of the month

var money = 1;

for (var i = 0; i < 30; i++) {
    money = money * 2;
}
console.log("You have, $"+ money);
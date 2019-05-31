//Variables declared with let can be reassigned 
// Variables declared with const cannot be reassigned
// Var can be used outside of a function and throughout the global scope 
// Let and const are block scoped variables and can only be accessed from within the code block they are declared in 

// create a program that demonstrates the difference between var,let and const

var varDemo = "Lisette";
console.log(varDemo);

varDemo = "Gorra";
console.log(varDemo);

function names(){
    varDemo = "Lisette Gorra";
}
names();

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);
car.color = "grey";
console.log(car);
car.type = "Camry";
console.log(car);
car = "auto"; // Here we cannot change the value, because of const
console.log(car);


var auto = {type:"Fiat", model:"500", color:"white"};
console.log(car);
auto.color = "grey";
console.log(car);
auto.type = "Camry";
console.log(car);
auto = "whip"; // Here we are able to change the value using var
console.log(auto);

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);
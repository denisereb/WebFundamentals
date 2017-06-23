//functions

//declaration
function hello(){
	console.log("Hello!!");
}

hello();


var hey = function(){
	console.log("hey");
}
//howtocallfunction
hey();


var Elias = function(){
	console.log("ELias");
}

Elias();

function addtwos(){
	var x = 2;
	var y = 2;
	console.log( x + y);
}

addtwos();

function multiplytentimestwo(){
	var x = 10;
	var y = 2;
	console.log( x * y);
}

multiplytentimestwo();

function numberEntered(x){
	console.log("the number entered is: ", x);
}

numberEntered(5);
numberEntered(7);
numberEntered(100000);

function addanytwonumbers(x,y){
	console.log("the sum is:", x + y);
}

addanytwonumbers(17, 1000);
addanytwonumbers(15, 29);


function fullname(first,last){
	console.log(first + " " + last);
}

fullname("Denise", "Hernandez");

function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
	return details;
}

petNameAndBreed("Rolu", "poodle");

//write a function that calculates the
//prce of 10 candybars in INdianana
//Allows us to enter more than one product
// sales tax 0.07

// function candyfinalprice(name,price){
// 	var details = name + ", " + price;
// 	console.log(details);
// 	retuen details;
// }

// candyfinalprice("Snickers,")

// function calcutlatePriceIndiana(quantity, price){
// 	var tax = 0.07;
// 	var totalTax= quantity * price * tax;
// 	console.log(totalTax);
// 	var totalPrice= totalTax + quantity * price
// 	return totalPrice;
// }

// console.log:"totalPrice")
//Episode 6
// Table (attribute, value) (table aka object)
//attributes
//Object can have function
//refrence variable = actual content is not in the variable it's pointing the memory address of the content
//variable in JS doesn't have predetermined type. it will de determined based on the value 
//Variable can be value type(number, string, boolean) and refrence type(point to object)
//Start with blank object and add any number of fields
//function itself is a object

var a = {x:16,
		y :20,
}
//Object review
console.log(a.x)
console.log(a.y)

var b = a
console.log(b.x)
console.log(b.y)
b.x = 90
b.z = 110
console.log(a.x)
console.log(a.z)

b.f1 = function() {					//function literal
	console.log("Hello World")
}
a.f1()

console.log("-------------------------------------")

//lambda = expression which is function aka function literal
//Object is responsible entity. Having two respon (knowing and doing)
//function are logically same but working with different data structure
//augmentation
//object is larger building block than a function
  
var piggyBank = {
}

piggyBank.bal = 0;
piggyBank.lt = 0;

piggyBank.deposit = function(val) {
	piggyBank.bal += val
	piggyBank.lt = val
}

piggyBank.withdraw = function(val) {
	if(piggyBank.bal >= val) {
		piggyBank.bal -= val
		piggyBank.lt = -val
	}else{
		console.log("Not enough money")
	}
}

piggyBank.statement = function() {
	console.log("piggyBank.bal", piggyBank.bal)
	console.log("piggyBank.lt", piggyBank.lt)
}

piggyBank.deposit(100)
piggyBank.statement()

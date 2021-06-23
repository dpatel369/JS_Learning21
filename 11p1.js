//1 Conditional (ternary) operator  

var age = 25
var check = (age > 23) ? "Correct" : "Try again"
console.log(check)


//varibale doesn't have data type beacause it holds the address of value 
// value hold the data type

//2 using function inside the object 

function speak(input) {
	console.log(input)
}

let animal = {
	Type: "Dog",
	color: "Brown",
	sound: speak
}
animal.sound("Bhaw") 						// calling the function speak using current object
console.log(Object.keys(animal))			//Print property name
console.log(Object.values(animal))			// Print value
console.log(animal)							//Print object animal with it's property and value



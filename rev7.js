//Ep-7
//this.x = dynamically scope 
//c# & java (this.x) lexical scope

//function called give you object = constructor  

// function piggyBank(val) {   //constructor 
// 	var obj1 = {}
// 	if(val == undefined){
// 		obj1.balance = 0
// 		obj1.lt = 0
// 	}else{
// 		obj1.balance = val
// 		obj1.lt = 0
// 	}
// 	obj1.__proto__= methods
// 	return obj1
// }

var methods = {deposit: deposit,
	withdraw : withdraw,
	statement : statement,
}

function deposit(val) {
	this.balance = this.balance+val
	this.lt = val
}

function withdraw(val) {
	if(this.balance > val){
		this.balance = this.balance - val
		this.lt = -val
	}else{
		console.log("Not enough balance")
	}
}

function statement() {
	console.log("this.balance", this.balance)
	console.log("this.lt", this.lt)
}

// var p1 = piggyBank() //use the created constructor

// p1.withdraw(10)
// p1.statement()

// var p2 = piggyBank(100)

// p2.deposit(20)
// p2.statement()


// var p3 = piggyBank(10)
// p3.statement()

// Object Inheritence
//when new is written before calling a function it automatically create a object(new) and return it inside the the function so no need to have return object inside the function

piggyBank.prototype = methods

var p4 = new piggyBank(100) 

function piggyBank(val) {   //constructor 
	if(val == undefined){
		this.balance = 0
		this.lt = 0
	}else{
		this.balance = val
		this.lt = 0
	}
}

p4.deposit(20)
p4.statement()


//function have special member called prototype (__proto is different comparing to the prototype)



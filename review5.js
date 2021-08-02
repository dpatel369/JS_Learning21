// Function - reusability
// JS = Functional Programming
// Function call is a expression/ Value 
// No parameter is passed = undefined  (Variable is not created)
//NaN = when parameter are not sent
// Undefined + Undefined = NAN
// Undefined = varibale doesn't exist
//NAN = doesn't have accepting value 
// Varibale can be type num, string , boolean, undefined
//Every function has table (Name, value)
//Function has it's own storage area
//Global variable or table variable
// In c use write static for global variable

function addTwo(a,b) {
	return a + b
}
console.log(addTwo(3,5))

function addTwonum(num1, num2){
	var sum = num1 + num2
	return sum
}

console.log(addTwonum(10,11))

function f1(a,b){
	var mult = (a*b)
	return mult
}
console.log(f1(3,5))

function f2(a,b){
	var div = (a/b)
	return div
}
console.log(f2(81,9))

function f3(a,b) {
	var sub = (a-b)
	return sub
}
console.log(f3(21,23))

var trys = addTwonum(f2(81,9),f1(3,5) )
console.log(trys)

var a = undefined
console.log(a)
console.log(typeof a)

b = 1
console.log(b)


// SUM

var mem = 3
function additionOfNum(input1, input2) {
	if(input1==undefined){
		input1 = 1
	}
	if(input2==undefined){
		input2 = mem
	}
	var sum = (input1 + input2)
	console.log("sum", sum)
	mem = sum
	return mem
}

console.log(additionOfNum())

//PiggyBank

var balance = 0
var lastTransc = 0

function deposit(val) {
	balance += val
	lastTransc = val
	deposit.count++

}

function withdraw(val) {
	if(balance >= val){
	balance = balance-val
	lastTransc = -val
	withdraw.count++
	}
}

function statement() {
	console.log("balance", balance)
	console.log("lastTransc", lastTransc)
	statement.count++
}
deposit.count = 0
withdraw.count = 0
statement.count = 0
deposit(100)
deposit(20)
withdraw(10)
withdraw(1)
withdraw(5)
statement()

console.log("withdraw.count", withdraw.count)
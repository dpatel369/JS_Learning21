//closures 
//some set of variable

function f1() {
	var i =0

	f1.f2 = function(){
		i++
		console.log(i)
	}
	f1.f3 = function() {
		i--
		console.log(i)
	}
	f1.f2()
	f1.f3()
}

f1()

//Lexical scope - create function within the scope of other function (all local varibale will be available as a environment)

function piggyBank() {
	var v = {
		balance: 0,
		lt: 0,
	}
	function deposit(val) {
	balance =balance+val
	lt = val
}

function withdraw(val) {
	if(balance > val){
		balance = balance - val
		lt = -val
	}else{
		console.log("Not enough balance")
	}
}

function statement() {
	console.log("balance", balance)
	console.log("lt", lt)
}

this.deposit = deposit
this.withdraw = withdraw
this.statement = statement
}

var piggyBank1 = new piggyBank()

piggyBank1.deposit(100)
piggyBank1.statement()


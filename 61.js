//Bank
//1

function deposit(bal, amount){
	return bal+amount
}
bal = 1000
bal=deposit(bal,100)
console.log(bal)


//2

function withdraw(bal, amount){
	return bal - amount
}
bal = withdraw(bal,100)
console.log(bal)

//3
function interest(bal, percent) {
	return bal*(percent/100)
}
irate=interest(bal,10)
bal = bal+irate
console.log(bal)

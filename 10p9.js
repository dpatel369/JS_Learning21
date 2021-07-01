// Design Project Account of Bank

let trans_1 = {
	date: "6/23/2021",
	transType: "withdraw",
	amount: 50,
	Bal: 1050,
}

let trans_2 = {
	date: "5/23/2020",
	transType: "Deposit",
	amount: 150,
	Bal: 1200,
}

var transaction = [trans_1, trans_2]

let info_1 ={
	accountOpened: "1/10/2020",
	accountNUm: "ABC-12345",
	additionalHolder: 2,
}

let info_2 ={
	email_Id: "abc123@gmail.com",
	phoneNUm: "551-222-3456",
	address: "31 USA ave"
}

var personal = [info_1, info_2] 


let accountHolder = {
	first_Name: "D",
	middle_Name: "S",
	last_Name: "Patel",
	currentBal_Checking: 1200,
	currentBal_Saving: 5000,
	personInfo:personal,
	activity:transaction,
}


// console.log(Object.keys(accountHolder))
// console.log(Object.values(accountHolder))
console.log(accountHolder)
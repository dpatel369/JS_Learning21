//Recursive function (Recursion)

// Recursion = calling the function itself. Break condtion/Base case using return

function printNum(n) {
	if(n==10){
		return;
	}
	console.log(n)
	printNum(n+1)
}
printNum(0) 				//(1-10)

console.log("-----------------------------------------------------------------------")

function printNum1(n) {
	if(n==0){
		return 0;
	}
	console.log(n)
	printNum1(n-1)
}
printNum1(10)    			//(10-1)

console.log("-----------------------------------------------------------------------")

function printNum3(n) {
	if(n==625){
		return;
	}
	console.log(n)
	printNum3((n)**2)
}
printNum3(5)			 	//(5,25)
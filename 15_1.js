//Recursion Func

function recursion(arg) {
	if(arg==625){
		return
	}
	console.log(arg)
	recursion((arg)**2)
}

recursion(5)

console.log("-------------------------------------------------------------------------")

//Sum of n

function addSum(n){
	if(n==0){
		return 0
	}
	return n + addSum(n-1)
}
console.log(addSum(10))

console.log("-------------------------------------------------------------------------")


// //Factor of n

function mult(n) {
	//if(n==1)  // try calling 0 RangeError: Maximum call stack size exceeded
	if(n==0){
		return 1
	}
	return n * mult(n-1)
}

console.log(mult(0))

console.log("-------------------------------------------------------------------------")


// //Power func

function power(num1, num2) {
	if(num2==0){
		return 1 
	}
	return num1 * power(num1,num2-1)
}
console.log(power(2,4))

console.log("-------------------------------------------------------------------------")


//Even number 


// function even(n) {
// 	if(n==0){
// 		return
// 	}
// 	if(n%2==0){
// 		console.log(n)
// 	}
// 	even(n-1)
// }
// even(9)

function even(n) {
	if(n==0){
		return
	}
	if(n%2!=0){
		n--
	}
	console.log(n)
	even(n-2)
}
even(9)

console.log("-------------------------------------------------------------------------")


//Odd numbers

function odd(n) {
	if(n==-1){
		return 
	}
	if(n%2==0){
		n -= 1
	}
	console.log(n)
	odd(n-2)
}
odd(9)


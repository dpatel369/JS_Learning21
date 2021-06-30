//Rec cont

// 1 Sum of n

function sumN(n) {
	if(n==0) {
		return 0;
	}
	return n + sumN(n-1)
}
console.log(sumN(10))					//55

console.log("-----------------------------------------------------------------------")

//Factor of N

function factorN(arg) {
	if(arg==1) {
		return 1;
	}
	return arg * factorN(arg-1)
}
console.log(factorN(5))					//120

console.log("-----------------------------------------------------------------------")

//Powwer of fun

function powerNum(arg1, arg2) {
	if(arg2==0) {
		return 1;
	}
	return arg1 * powerNum(arg1, arg2-1)
}
console.log(powerNum(2,5))				//32


//326 Power of Three

var isPowerOfThree = function(n) {
	if(n==1){
		return true
	}
	if(n>1 && n%3==0){
		var x = n/3
		return isPowerOfThree(x)
	}
	return false
}
console.log(isPowerOfThree(0))
//342. Power of Four

var isPowerOfFour = function(n) {
	if(n==1){
		return true
	}
	if(n>1 && n%4==0){
		var x = n/4
		return isPowerOfFour(x)
	}else{
		return false
	}
}
console.log(isPowerOfFour(0))
//231. Power of Two

function isPowerOfTwo(n) {
	if(n==1){
		return true
	}
	if(n>1 && n%2==0){
		a = n/2
		return isPowerOfTwo(a)
	}else{
		return false
	}
}
console.log(isPowerOfTwo(1024))

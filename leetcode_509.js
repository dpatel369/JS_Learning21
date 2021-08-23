//509. Fibonacci Number

var fib = function(n) {
	var arrsum = []
	arrsum.push(0)
	arrsum.push(1)
	// if(n==0){
	// 	return 0
	// }
	// if(n==1){
	// 	return 1
	// }
	if(n<2){
		return n
	}
	for(var i=2; i<n; i++) {
		x = arrsum[i-2]+arrsum[i-1]
		arrsum.push(x)
	}
	sum = arrsum[n-1]+arrsum[n-2]
	return sum
};
var n = 3
console.log(fib(n))
var countPrimes = function(n) {
var resultArr = []
for(i=0; i<n; i++){
count = 0
	for(j=0; j<=i; j++){
		if(i%j==0){
			count++
		}
		}
		if(count==2){
			resultArr.push(i)
		}
}
return resultArr.length 
}
var n=499979
console.log(countPrimes(n))y
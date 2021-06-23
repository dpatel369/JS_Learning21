//var arr = [65,42,32,7,11,67,88,97,91,77,37,79]
//display all the prime number from the given number


var arr = [5,65,42,32,7,11,67,88,97,91,77,37,79,2 ,0]

function displayPrime(given) {
var outputArray = []
for(i=0; i<given.length; i++){
count = 0
	for(j=1;j<=given[i];j++){
		if(given[i]%j==0){
			count++
		}
	}
	if(count==2){
	outputArray.push(given[i])
}
}
return outputArray
}
console.log(displayPrime(arr))


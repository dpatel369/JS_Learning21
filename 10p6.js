//identify given number (13) is prime or not

function checkPrime(inputNum) {
count = 0
for(i=1; i<=inputNum; i++){
	if(inputNum%i==0){
		count++
	}
}
	if(count==2){
		console.log("This is Prime number")
}
	else{
		console.log("Not a prime number")
	}
}
checkPrime(7)
//identify given number (13) is prime or not

var num = 13
count = 0

for(i=1; i<=num; i++){
	if(num%i==0){
		count++
	}
}
	if(count==2){
		console.log("This is Prime number")
}
	else{
		console.log("Not a prime number")
	}

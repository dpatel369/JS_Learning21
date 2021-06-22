//Display all the prime number between 1-100

var a = []
var num = 100

for(i=1; i<=num; i++){
count = 0
	for(j=1; j<=i; j++){
		if(i%j==0){
			count++
		}
		}
		if(count==2){
			a.push(i)
		}
} 
console.log(a)

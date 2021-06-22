//var arr = [65,42,32,7,11,67,88,97,91,77,37,79]
//display all the prime number from the given number

var arr = [65,42,32,7,11,67,88,97,91,77,37,79]
 
var a = []
for(i=0; i<arr.length; i++){
count = 0
	for(j=1;j<=arr[i];j++){
		if(arr[i]%j==0){
			count++
		}
	}
	if(count==2){
	a.push(arr[i])
}
}
console.log(a)


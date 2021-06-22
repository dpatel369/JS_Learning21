//var temp = [1,2,4,7,8,-6] take even number and return sum of it
//Use negative number array

// var temp = [1,5,2,6,7,8,-6]
var temp = [1,2,4,7,8,-6]
var sum = 0
function sumEven(arr) {
	for(i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			sum = arr[i]+sum
		}
	}
	return sum
}
console.log(sumEven(temp))
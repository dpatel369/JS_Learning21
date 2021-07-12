//Insertion sort
var arr = [10,201,3,15,-7,1,9,108]
// var arr = [1,2,3,4]

for(var i=0; i<arr.length; i++){
	console.log("i= ", i)
	for(var j=i;j>0; j--){
		console.log("	j= ", j)
		if(arr[j]<arr[j-1]){
			console.log("	inside if")
			x = arr[j-1]
			arr[j-1] = arr[j] 
			arr[j] = x
		}
		else{
			console.log("	inside else")   //debugging using logger
			break;
		}
	}
}
console.log(arr)


console.log("-------------------------------------------------------------------------")

//Bubble sort

var listArr = [3,8,-5,9,4,5,2,1,0,2.3]

function bubbleSort(input) {
	for(var p=0; p<input.length; p++){
		for(var u=p+1; u<input.length; u++){
			if(input[p]>input[u]){
				x = input[p]
				input[p] = input[u]
				input[u] = x
			}
		}
	}
	return input
}
console.log(bubbleSort(listArr))


console.log("-------------------------------------------------------------------------")


//Inseration sort

var arr = [10,3,15,-8,1,9,-3,108]

function inserationSort(given) {
	for(var k=0; k<given.length; k++){
		for(var s=k; s>0; s--){
			if(given[s]<given[s-1]){
				x = given[s-1]
				given[s-1] = given[s]
				given[s] = x
			}
			else{
				break;
			}
		}
		}
	return given
}
console.log(inserationSort(arr))
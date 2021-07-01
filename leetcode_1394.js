// function findLucky(arr) {
// 	for(var i=0; i<arr.length; i++){
// 		for(var p=0; p<arr.length; p++){
// 			if(arr[p]==arr[p+1]){
// 				x = arr[p]
// 			}
// 			else{
// 				return (-1)
// 			}
// 		}
// 		return x
// 	}
// }
// var arr = [5,2,2,3,4]
// console.log(findLucky(arr))


// function findLucky(arr) {
// x = arr.sort(function(a,b) {return a-b;})
// var count = 0
// for(var i=0 ; i<arr.length; i++){
// 	count = 0
// 	for(var j =0 ; j<arr.length; j++){
// 		if(arr[j]== val){
// 			count++
// 		}
// 		if(count==val){
// 			x = val
// 		}
// 		else{
// 			return (-1)
// 		}
// 	}
// 	return x
// }
// var arr = [2,2,3,4]
// console.log(findLucky(arr))


// function findLucky(arr) {
// function findLucky(arr) {
// x = arr.sort(function(a,b) {return a-b;})
// var count = 1
// for(i=0; i<x.length; i++){
// 	count = 1
// 	currentNum = x[i]
// for(j=i+1; j<x.length; j++){
// 	if(x[j]==currentNum){
// 		count++
// 	}
// }
// 	if(count==currentNum){
// 		luckyint = currentNum
// 	}
// }
// 	if(count != currentNum){
// 		return null
// 	}
// 	else{
// 		return luckyint
// 	}
// }


function findLucky(arr) {
x = arr.sort(function(a,b) {return a-b;})
var count = 0
var luckyint = -1
console.log("x" , x)
for(i=0; i<x.length; i++){
	console.log("i", i)
	count = 0
	currentNum = x[i]

	for(j=i; j<=x.length; j++){
		console.log("	j", j)
		if(x[j]==currentNum){
			count++
		}
		else{
			i = i + (count-1)
			console.log("===========================================	i", i)
			break
		}
	}

	console.log("currentNum = ",currentNum,"	count = ", count)
	if(count==currentNum){
		luckyint = currentNum
		console.log("	luckyint", luckyint)
	}

}
return luckyint
}
// var arr = [1,2,2,2,4,0,3,3,3,1]
var arr = [6,13,8,6,2,1,9,12,10,3,17,14,16,10,8,6,7,5,10,16,15,14,16,8,4,20,19,12,19,11,20,18,16,10,1,13,8,13,8,17,7,7,1,12,20,10,14,1,15,1,2,6,15,13,11,2,20,9,10,11,20,15,4,15,12,17,18,12,7,20,4,19,3,12,12,10,10,5,3,2,5,18,4,19,14,8,5,2,18,12,3,16,11,7,9,4,11,13,2,5,5,7,18,11,2,3,15,7,19,2,18,8,7,5,10,12,14,15,10,12,11,2,1,14,12,2,5,9,1,19,4,5,6,13,11,8,15,16,9,15,4,10,20,6,9,4,8,17,19,7,6,8,16,15,10,13,5,20,11,6,10,17,20,10,17,5,2,2,20,20,13,2,5,19,6,12,7,5,17,19,16,7,20,19,10,11,17,12,10,1,1,18,4,6,4,13,2,1,6,8,17,12,16,1,19,4,15,18,2,1,17,19,6,2,1,17,6,3,12,9,17,12,2,10,20,19,20,19,19,8,6,6,2,4,9,14,3,2,3,2,18,2,2,18,11,18,20,13,6,1,9,8,16,4,8,7,14,20,20,2,17,9,17,2,17,12,20,6,8,19,7,15,10,12,20,6,1,9,6,9,19,19,18,4,19,3,16,14,13,14,10,16,3,2,3,7,2,16,19,9,17,10,9,12,11,8,3,7,12,19,4,17,14,17,19,8,6,18,18,7,6,16,13,2,13,18,17,6,5,2,16,14,4,11,11,7,15,19,7,11,6,1,16,14,14,8,14,20,8,17,8,18,10,8,18,8,6,17,11,7,20,16,9,15,2,9,3,12,13,19,13,14,19,15]
console.log(findLucky(arr))


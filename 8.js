//1
// function getVal(arr, int){
// 	return arr[int%arr.length]
// }
// var arrlist = [1,2,3,4,5]
// getVal(arrlist, 2)

// console.log(getVal(arrlist, 90))
// console.log(getVal(arrlist, 3))
// console.log(getVal(arrlist, 4))
// getVal(arrlist, 5)

//Learned - When you % the given number the remainder of any positive number is always between (0 and less the number that you have used to divide something )
//When you are given an array and regardless of the given number of index to find value within array you can use the operation of % to find the value within array. 


//2 circular arraf
// function circ(arr){
// 	for(i=0; i<arr.length*3; i++){
// 	console.log(arr[i%arr.length])
//  }
// }
// var list = [1,2,3]
// circ(list)

//Learned - With the help of circular array you can go thorugh the array from start ->end // start ->end

//3
// function Cont(arr,int){
// 	for(var i=0; i<arr.length*int; i++){
// 		console.log(arr[i%arr.length])
// 	}

// }
// var listNum = [1,2,3]
// Cont(listNum, 5)
// Cont(listNum, 0)
// Cont(listNum, 1)



//Learned - Using function with two parameters and operation (%) you can access the array same order for the numbers of time that you have inputed 



//Circular in another way 

// function Calc(arr){
// 	var init = arr[0]
// 	for(var i=0; i<arr.length; i++ ){
// 		var c = ((i+1)%arr.length)
// 		var e = arr[c]
// 	  	arr[c] = init
// 		init = e
// 	}
// 	return arr
// }
// var input = [1,2,3,4,5]
// console.log(Calc(input))


//Bubble sort
function bSort(arr) {
	for(i=0; i<arr.length; i++){
		for(j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				x = arr[j]
				arr[j]=arr[i]
				arr[i]=x
			}
		}
	}
		return arr
}
var inputList = [3,1,4,5,2]
console.log(bSort(inputList))
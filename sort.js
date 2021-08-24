// Selection Sort

var selectionSort = function(array) {
	for(var i=0; i<array.length; i++) {
		console.log("i",i)
		for(var p=i+1; p<array.length; p++) {
			console.log("p=",p)
			if(array[i]>array[p]) {
				x = array[p]
				array[p] = array[i]
				array[i] = x
			}
		}
	}
	return array
}
var array = [4,5,61,2,8,-1,0]
console.log(selectionSort(array))

console.log("-------------------------")

//Insertion Sort

function insertionSort(input) {
	for(var i=0; i<input.length; i++) {
		for(var p=i; p>0; p--) {
			if(input[p]<input[p-1]) {
				x = input[p]
				input[p] = input[p-1]
				input[p-1] = x
			}else{
				break
			}
		}
	}
	return input
}
var input = [5,4,10,0,1,6,2,-20]
console.log(insertionSort(input))

console.log("-------------------------")


//Merge Sort

var mergeSort = function(given) {
	if(given.length<=1) {
		return given;
	}
	var mid = Math.trunc(given.length)/2
	var left = given.slice(0, mid)
	var right = given.slice(mid, given.length)
	var one = mergeSort(left)
	var two = mergeSort(right)
	var result = merge(one, two)
	return result
}
console.log(mergeSort([3,4,5,6,1,2,3,0,12,-2]))

function merge(arr1, arr2) {
	var list = []
	let i=0
	let j=0
	for(;i<arr1.length && j<arr2.length;){
		if(arr1[i]<arr2[j]){
			list.push(arr1[i])
			i++
		}else{
			list.push(arr2[j])
			j++
		}
	}
	if(i<arr1.length) {
		for(var p=i; p<arr1.length; p++) {
			list.push(arr1[p])
		}
	}
	if(j<arr2.length) {
		for(var m=j ; m<arr2.length; m++) {
			list.push(arr2[m])
		}
	}
	return list
}


console.log("-------------------------")

//Bubble Sort

var bubbleSort = function(list) {
	for(var p=0; p<list.length-1; p++){
		console.log("p", p)
		var count = 0 
		for(var i=0; i<list.length-p-1; i++) {
			console.log("	i", i)
			if(list[i]>list[i+1]) {
				x = list[i+1]
				list[i+1] = list[i]
				list[i] = x
				count++
			}
		}
		if(count==0){
			break
		}
	}
	return list
}
var list = [1,2,3,4,5]
console.log(bubbleSort(list))
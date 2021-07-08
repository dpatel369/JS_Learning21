function mergeSort(arr) {
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.round(arr.length/2)
	var left = arr.slice(0, mid)
	var right = arr.slice(mid, arr.length)
	var a = mergeSort(left)
	var b = mergeSort(right)
	var x = merge(a, b)
	return x 
}

function merge(arr1, arr2) {
	let list =[]
	let i = 0
	let j = 0
	for(; i<arr1.length && j<arr2.length;){
		if(arr1[i]>arr2[j]){
			list.push(arr2[j])
			j++
		}else{
			list.push(arr1[i])
			i++
		}
	}
	if(j<arr2.length){
		for(var p=j; p<arr2.length; p++){
				list.push(arr2[p])
		}
	}
	if(i<arr1.length){
		for(var p=i; p<arr1.length; p++){
				list.push(arr1[p])
		}
	}
	return list
}

console.log(mergeSort([5,3,2,4]))


//It's better to use Let, Const, Var when declaring something/variable 

//without let var const we aren't defining any scope which can be accessed in a global scope
//Array

// var a = [3]
// var b = [2]

a = [3,5,]
b = [2,4,]
// result = [1,2,3,4,5,6]

// var a = [1,7]
// var b = [2,5]

function merge(arr1, arr2) {
	
	var list =[]
	var i = 0
	var j = 0
	for(; i<arr1.length && j<arr2.length;){
		console.log("i",i , "	j", j)
		if(arr1[i]>arr2[j]){
			list.push(arr2[j])
			j++
		}else{
			list.push(arr1[i])
			i++
		}
	}
	console.log("	j",j)
	if(j<arr2.length){
		for(var p=j; p<arr2.length; p++){
				list.push(arr2[p])
		}
	}
	console.log("i", i)
	if(i<arr1.length){
		for(var p=i; p<arr1.length; p++){
				console.log("inside i", i)
				list.push(arr1[p])
		}
	}
	return list
}

console.log(merge(a, b))


//compplete current problem
//Merge sort  (thoery and understanding)
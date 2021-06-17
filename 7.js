// //Delete Index

function delIndex(arr, ind){
	for(var i=ind; i<arr.length; i++){
		arr[i]=arr[i+1]
	}
	arr.length= arr.length-1
	return arr
}
// var arr = [7,8,11,17,9,1,13]
// console.log(delIndex([1, 2, 3],2))

// //check for val in the array and return boolean

// function contains(arrlist, val){
// 	for(i=0; i<arrlist.length; i++){
// 	if(arrlist[i]==val){
// 		return true
// 	}
// }
// return false
// }

// var arrlist = [1,2,2,1,3,9,3,1,4,1,7]
// console.log(contains(arrlist, 11))

// //

// function hasDuplicate(arlist){
// 	for(i=0; i<arlist.length; i++){
// 		for(j=i+1; j<arlist.length; j++){
// 			if(arlist[i]==arlist[j]){
// 				return true
// 			}
// 		}
// 	}
// 	return false
// }
// arlist = [1,2,3,1]
// console.log(hasDuplicate(arlist))

//
function rDuplicate(arr) {
	for(var i=0; i<arr.length; i++){
		for(var p=i+1; p<arr.length; p++){
			if(arr[i]==arr[p]){
				arr = delIndex(arr, p)
				p=(p-1)
			}
		}
	}
	return arr
}
rr = [1,2,3,1,1,7,9]
console.log(rDuplicate(rr))
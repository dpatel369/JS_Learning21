//Find the largest number in the list of array

function largestnum(a){
	val = a[0]
	for(i=0;i<a.length;i++){
		if(a[i]>val){
			val = a[i]
		}
	}
		return val
}
 console.log(largestnum([1,5,9,11,3,6]))
// console.log(largestnum([-4, -5, -10, -2])) 


//negative number
// // console.log(largestnum([-4, -5, -10, -2])) 
// //Find the largest number in the list of array

// function largestnum(a){
// 	val = a[0]  // 0
// 	for(i=0;i<a.length;i++){
// 		if(a[i]>val){
// 			val = a[i]
// 		}
// 	}
// 		return val
// }


// // console.log(largestnum([-4, -5, -10, -2])) 



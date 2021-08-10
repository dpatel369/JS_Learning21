//496. Next Greater Element I

var nextGreaterElement = function(nums1, nums2) {
	var number = []
	let i=0
	let p=0
	for(;i<nums1.length && p<nums2.length; p++){
		var currentNum = nums1[i]
		if(nums2[p] >= currentNum){
			number.push("Hello")
		}else{
			i++
		}
	}
	return number
}

var nums1 = [4,1,2]
var nums2 = [1,3,4,2,5]
console.log(nextGreaterElement(nums1, nums2))


// for(var i=0; i<nums1.length; i++) {
// 		var currentNum = nums1[i]
// 		console.log(currentNum)
// 		for(var p=0; p<nums2.length; p++){
// 			if(nums2[p]>currentNum){
// 				number.push("HELLO")
// 			}
// 		}
// 	}
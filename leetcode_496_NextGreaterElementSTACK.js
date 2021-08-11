//496. Next Greater Element I

var nextGreaterElement = function(nums1, nums2) {
	var result = []
	for(var i=0; i<nums1.length; i++){
		var currentNum = nums1[i]
		for(var p=0; p<nums2.length; p++){
			if(nums2[p] == currentNum){
				var start = p
			}
		}	
			var count=0
			for(var s=start+1; s<nums2.length; s++){
				if(nums2[s] > currentNum){
					result.push(nums2[s])
					count++
					break
				}
			}
			if(count==0){
				result.push(-1)
			}
	}
	return result
}
var nums1 = [4,1,2]
var nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1, nums2))

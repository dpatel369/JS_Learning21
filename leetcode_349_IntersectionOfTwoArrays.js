//349 Intersection of Two Arrays

var intersection = function(nums1, nums2) {
	var resultArr = []
	for(var i=0; i<nums1.length; i++){
		var currentNum = nums1[i]
	for(var p=0; p<nums2.length;p++) {
		if(nums2[p]==currentNum){
			resultArr.push(nums2[p])
			break
		}
	}
}
	return resultArr.filter((x, i, a) => a.indexOf(x) === i)
}

var nums1 = [1,2,1,2]
var nums2 = [2,2,2]

console.log(intersection(nums1, nums2))

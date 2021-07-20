//88 Merge Sorted Array 

var merge = function(nums1, m, nums2, n) {
	nums1.splice(m,nums1.length)
	nums2.splice(n,nums2.length)
	for(var i=0; i<nums2.length; i++){
		nums1.push(nums2[i])
	}
	for(var i=0; i<nums1.length; i++) {
		for(var p=i; p>0; p--) {
			if(nums1[p]<nums1[p-1]) {
				x = nums1[p]
				nums1[p] = nums1[p-1]
				nums1[p-1] = x
			}else{
				break
			}
		}
	}
		return nums1
}
var nums1 = [4,5,6,0,0,0]
var nums2 = [1,2,3]
console.log(merge(nums1, 3, nums2, 3))
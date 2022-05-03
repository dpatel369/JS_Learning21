//162 Find Peak Element 

var findPeakElement = function(nums) {
	for(var i=1; i<nums.length-1; i++) {
		if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
			return i
		}
	}
	if(nums[0] > nums[1]) {
		return 0
	}else if(nums[nums.length-1]>nums[nums.length-2]){
		return nums.length-1
	}
	return 0
}

var nums = [1]
console.log(findPeakElement(nums))



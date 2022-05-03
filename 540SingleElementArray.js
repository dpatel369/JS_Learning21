//540. Single Element in a Sorted Array

var singleNonDuplicate = function(nums) {
	for(var i=1; i<nums.length-1; i++) {
		if(nums[i] != nums[i-1] && nums[i] != nums[i+1]) {
			return nums[i]
		}
	}
	if(nums[0] != nums[1]) {
		return nums[0]
	}
	if(nums[nums.length-2] != nums[nums.length-1]) {
		return nums[nums.length-1]
	}
	if(nums.length==1) {
		return nums[0]
	}
};

var nums = [1,2,2,3,3]

console.log(singleNonDuplicate(nums))


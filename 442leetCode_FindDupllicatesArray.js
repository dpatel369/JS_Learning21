//442. Find All Duplicates in an Array

function findDuplicates(nums) {
	nums.sort()
	var result = []
	for(var i=0; i<nums.length; i++) {
		if(nums[i]==nums[i+1]) {
			result.push(nums[i])
		}
	}
	return result
}

var nums = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(nums))

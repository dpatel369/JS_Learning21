//260. Single Number III

var singleNumber = function(nums) {
	nums.sort()
	var result = []
	for(var i=0; i<nums.length;) {
		if(nums[i]==nums[i+1]) {
			i+=2
		}else{
			result.push(nums[i])
			i++
		}
	}
	return result
};

var nums = [0,1,1,2]
console.log(singleNumber(nums))


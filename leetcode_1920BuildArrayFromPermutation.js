//1920 Build Array from Permutation

var buildArray = function(nums) {
	var ansArr = []
	for(var i=0; i<nums.length; i++){
		ansArr.push(nums[nums[i]])
	}
	return ansArr

}
var nums = [5,0,1,2,3,4]
console.log(buildArray(nums)) 
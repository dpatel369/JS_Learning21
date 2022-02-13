//2023. Number of Pairs of Strings With Concatenation Equal to Target

var numOfPairs = function(nums, target) {
	var array=[]
	var count= 0;
	for(var i=0; i<nums.length; i++) {
		for(var p=i+1; p<nums.length; p++) {
			array.push(nums[i]+nums[p])
			if(array[array.length-1]==target) {
				count++
			}
			array.push(nums[p]+nums[i])
			if(array[array.length-1]==target) {
				count++
			}
		}
	}
	return count
};

var nums = ["123","4","12","34"]
var target = "1234"

console.log(numOfPairs(nums, target))


				// var num = (nums[i]+nums[p])
				// console.log("===",num)
				// if(num == target) {
				// // console.log(num)
				// 	count++
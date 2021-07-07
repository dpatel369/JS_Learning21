//1800. Maximum Ascending Subarray Sum

function maxAscendingSum(nums) {
var currentNum = 0;
var sum = 0;
var list = [];
var result =0;
	for(var i=0 ; i<nums.length; i++) {
		if(nums[i]>currentNum) {
			sum = nums[i]+sum
			currentNum = nums[i]
			list.push(sum)
		}else{
			currentNum = nums[i];
			sum = nums[i];
			list.push(sum)
		}
	}
	var max = 0 ;
	for(var p=0; p<list.length; p++){
		if(list[p]>max){
			result = list[p]
			max = list[p]
		}
	}
	return result
}

// var nums = [5,10,50,10,20,30]
var nums = [100,10,1]
console.log(maxAscendingSum(nums))



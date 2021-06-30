//1822 Sign of the Product of an Array

function arraySign(nums) {
	var sum = nums[0]
	for(var i=1; i<nums.length;i++){
		sum = nums[i]*sum
	}
	if(sum>0){
		return 1
	} else if(sum<0){
		return -1
	}else {	
		return 0	
	}
}
var nums = [-1,-2,-3,-4,3,2,1]
console.log(arraySign(nums))
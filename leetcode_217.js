//217. Contains Duplicate

var containsDuplicate = function(nums) {
	var x = nums.sort()
	var currentNum = nums[0]
	var count =0
	for(var i=0; i<nums.length; i++){
		if(nums[i]==currentNum){
			count++
		}else{
			currentNum = nums[i]
		}
	}
	console.log(count)
	if(count>=2){
		return true 
	}else{
		return false
	}
}

var nums = [1,2,3,1]
console.log(containsDuplicate(nums))
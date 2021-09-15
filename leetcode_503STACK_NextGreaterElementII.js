//503. Next Greater Element II

var nextGreaterElements = function(nums) {
	var result=[]
	var maxNum = Math.max(...nums)
		for(var i=0; i<nums.length; i++){
			var p=i+1
			var count=0
			for(;p<nums.length;){
				if(nums[i]<nums[p]){
					result.push(nums[p])
					count++
					break
				}
				else{
					p++
				}
			}
			if(nums[i]==maxNum){
				result.push(-1)
			}
			if(count==0){
				for(var j=0; j<nums.length; j++){
					if(nums[i]<nums[j]){
						result.push(nums[j])
						break
					}
				}
			}
		}
	return result
}


var nums = [5,4,3,2,1]
console.log(nextGreaterElements(nums))

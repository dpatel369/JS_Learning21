var majorityElement = function(nums){
	var a = nums.sort()
	var Result = a[0]
	var currentNum = a[0]
	var currentcount = 0
	var maxcount = 0
	for(var i=0; i<a.length; i++){
		if(a[i]==currentNum){
			currentcount++
		}else{
			if(currentcount>maxcount){
				maxcount = currentcount
				Result = currentNum
			}
			currentNum = a[i]
			currentcount = 1
		}
	}
	if(currentcount>maxcount){
		Result = currentNum
	}
	return Result
}
var nums = [3,2,3]
console.log(majorityElement(nums))
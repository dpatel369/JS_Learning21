//How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
	var arr=[]
    for(var i=0; i<nums.length; i++){
    	var count=0
    	var currentNum = nums[i]
    	for(var p=0; p<nums.length; p++){
    		if(nums[p]<currentNum){
    			count++
    		}
    	}
    	arr.push(count)
    }
    return arr
};


var nums = [7,7,7,7]
console.log(smallerNumbersThanCurrent(nums))

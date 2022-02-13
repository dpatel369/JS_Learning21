//2006. Count Number of Pairs With Absolute Difference K


function countKDifference(nums, k) {
	var count = 0;
	for(var i=0; i<nums.length; i++) {
		for(var p=i+1; p<nums.length; p++){
			var num = Math.abs(nums[i]-nums[p]);
			if(num==k){
				count++
			}
		}
	}
	return count
}

var nums = [1,2,2,1]
var k = 1

console.log(countKDifference(nums, k))
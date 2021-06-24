//1512. Number of Good Pairs


nums = [1,2,3,1,1,3]

function numIdenticalPairs(nums) {
	var count = 0
	for(i=0; i<nums.length; i++){
		for(j=i+1; j<nums.length; j++){
			if(nums[i]==nums[j] && i<j){
				count++
			}
		}
	}
	return count
}
console.log(numIdenticalPairs(nums))
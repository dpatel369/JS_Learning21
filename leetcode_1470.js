//Shuffle the Array 
//1470

nums = [2,5,1,3,4,7]

function shuffle(nums, n) {
number = []
	for(i=0; i<n; i++){
		 x = nums[i]
		 y = nums[i+n]
		 number.push(x,y)
	}
	return number
}
console.log(shuffle(nums, 3))
//268. Missing Number

var missingNumber = function(nums) {
	var arr = nums.sort(function (a,b){return a-b})  
	var length = (arr.length)
	for(var i=0; i<=length; i++){
		if(i!=arr[i]){
			return i
		}
	}
}

var nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
console.log(missingNumber(nums))
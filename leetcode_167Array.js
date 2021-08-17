//167. Two Sum II - Input array is sorted

var twoSum = function(numbers,target) {
	for(var i=0; i<numbers.length; i++){
		for(var p=i+1; p<numbers.length; p++){
			if(numbers[i]+numbers[p]==target){
				return [i+1, p+1]
			}
		}
	}
}

var numbers =  [-1,0]
var target = -1
console.log(twoSum(numbers,target))
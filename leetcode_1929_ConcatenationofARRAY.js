//1929. Concatenation of Array
var getConcatenation = function(nums) {
	var result = []
	for(var i=0; i<2; i++){
		for(var p=0; p<nums.length; p++){
			result.push(nums[p])
		}
	}
	return result
}

var nums = [1,3,2,1]
console.log(getConcatenation(nums))


// var result = []
// result.push(...nums)
// result.push(...nums)
// return arr
// var name = [
// {"first_name": "Mahendra", "last_name": "Dhoni"},
// {"first_name": "Virat", "last_name": "Kohli"},
// {"first_name": "Rohit", "last_name": "Sharma"},
// {"first_name": "KL", "last_name": "Rahul"},
// {"first_name": "Akshar", "last_name": "Patel"},
// {"first_name": "Ravindra", "last_name": "Jadeja"}
// ]

// list = name.sort(function(a,b){return a-b})
// console.log(list)

//268. Missing Number

var missingNumber = function(nums) {
	var arr = nums.sort(function (a,b){return a-b}) 
	console.log(arr) 
	var length = (arr.length)
	for(var i=0; i<=length; i++){
		if(i!=arr[i]){
			return i
		}
	}
}

var nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
console.log(missingNumber(nums))
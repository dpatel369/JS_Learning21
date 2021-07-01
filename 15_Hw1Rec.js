//Recursion 1 Bunny Ears 2

function ears(input1) {
	console.log("input1", input1)
	if(input1==0) {
		return 0;
	}
	if(input1%2==0) {
		var num = 3
		console.log("	num", num)
	}
	else{
		var num = 2
		console.log("	num", num)
	}
	return num + ears(input1-1)
}
console.log(ears(10))
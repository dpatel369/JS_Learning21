// 1 Print even number using Rec

function evenNum(input) {
	if(input==0) {
		return;
	}
	if(input%2==0) {
		console.log(input)
	}
	else{
		input -= 1
		console.log(input)
	}
	evenNum(input-2)
}
evenNum(9)						//(10,8,6,4,2)

console.log("-----------------------------------------------------------------------------")

//Better version of code

function evenNum1(input1) {
	if(input1==0) {
		return;
	}
	if(input1%2 !=0) {
		input1 -= 1
	}
	console.log(input1)
	evenNum1(input1-2)
}
evenNum1(6)						//(6,4,2)

console.log("-----------------------------------------------------------------------------")


//2 Print odd num

function oddNum(arg) {
	if(arg==-1) {
		return;
	}
	if(arg%2 ==0) {
		arg -=1
	}
	console.log(arg)
	oddNum(arg-2)
}
oddNum(5)
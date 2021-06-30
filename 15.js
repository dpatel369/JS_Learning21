// [0,0,0,0][1,1,1,1] = [0,0,0,0,1,1,1,1]
// [0,0,0,0][1,1,1,1] = [1,1,1,1,0,0,0,0]
// [0,0,0,0][1,1,1,1] = [0,1,0,1,0,1,0,1]

function combine1(arg1,arg2) {
	var arrRes = []
	for(var i =0; i<arg1.length; i++){
		arrRes.push(arg1[i])
	}
	for(var p=0; p<arg2.length; p++){
		arrRes.push(arg2[p])
	}
	return arrRes
}
var arg1 = [0,0,0,0]
var arg2 = [1,1,1,1]
console.log(combine1(arg1,arg2))

console.log("---------------------------------------------------------------------------------------")

function combine2(arg3,arg4) {
	var arrRes = []
	for(var i =0; i<arg4.length; i++){
		arrRes.push(arg4[i])
	}
	for(var p=0; p<arg3.length; p++){
		arrRes.push(arg3[p])
	}
	return arrRes
}
var arg3 = [0,0,0,0]
var arg4 = [1,1,1,1]
console.log(combine2(arg3,arg4))

console.log("---------------------------------------------------------------------------------------")

function combine3(arg5,arg6) {
	var arrRes = []
	for(var i =0; i<arg5.length; i++){
		arrRes.push(arg5[i])
		arrRes.push(arg6[i])
		
}
	return arrRes
}
var arg5 = [0,0,0,0]
var arg6 = [1,1,1,1]
console.log(combine3(arg5,arg6))
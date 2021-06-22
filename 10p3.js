//Create 2 function should return list of Key and Value

let user = {
	id: 12345,
	name: "User1",
	ranking: 1,
	game : ["NFS", "NBA", "NFL"]
}

function key(input1) {
arrlist = []
	for(val in input1){
		arrlist.push(val)
	}
	return arrlist
}
console.log(key(user))

function value(input2) {
x = []
	for(output in input2){
		x.push(input2[output])
	}
	return x
}
console.log(value(user))








// function value(input2) {
// 	for(output in input2){
// 		console.log(input2[output]) // to print value 
// 		console.log(val) //to print property list
// 	}
// }
// value(user)
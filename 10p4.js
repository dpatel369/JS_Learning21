//Create three different function that will take student as input and return MIN/MAX and average of height 

let student = {
	name: "Dipam",
	friends_Height: [5,4,6,7]
}

function max(input1) {
	var x = student.friends_Height[0]
	for(i=0; i<student.friends_Height.length; i++){
		if(student.friends_Height[i]> x){
			x = student.friends_Height[i]
	}
}
return x
}
console.log(max(student))

function min(input2) {
	var y = student.friends_Height[0]
	for(i=0; i<student.friends_Height.length; i++){
		if(student.friends_Height[i] < y){
			y = student.friends_Height[i]
		}
	}
	return y
}
console.log(min(student))

function avg(input3) {
	var c = 0
	var total = 0
	for(i=0; i<student.friends_Height.length; i++){
		var c = (student.friends_Height[i] + c)
	}
	total = (c/student.friends_Height.length)
	return total
}
console.log(avg(student))
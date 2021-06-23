//Making function inside the object AKA method of object
//Use this instead of object name (/student.name can be = (this.name)

let students = {
	Name: 'DP',
	show(input){
		console.log("Hello World"+", "+ input+" "+this.Name)    //Use this instead of object handler so when in future if the object name is changed you won't have to update the handler name when asking for value
	}
}
students.show("I am")

for(val in students){
	console.log(val)
}


//Calling function inside the object to find the average of grade

let course_1 = {
	courseNum : "CS491",
	marks: 95
};

let course_2 = {
	courseNum : "CS490",
	marks: 96
}

let course_3 = {
	courseNum : "CS332",
	marks: 85
}

let course_4 = {
	courseNum : "CS280",
	marks: 94
}

let course_5 = {
	courseNum : "CS435",
	marks: 65
}

var courseList = [course_1, course_2, course_3, course_4, course_5]

let student = {
	id: 1234,
	name: "Hari",
	courses: courseList,
	highestMark(){
	var sum  = 0
	for(i=0; i<this.courses.length; i++){
		sum = this.courses[i]["marks"]+sum
	}
		avg = (sum)/this.courses.length
		return avg
	}
}
console.log(student.highestMark())

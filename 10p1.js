/*Note - the function worked according to array but the actual solution can be found in the 
file 10p5.js */
// find the course name that has highest marks

let course_1 = {
	cNum: "CS491",
	marks: 55
}
let course_2 = {
	cNum: "CS490",
	marks: 75
}
let course_3 = {
	cNum: "CS435",
	marks: 70
}
let course_4 = {
	cNum: "CS332",
	marks: 85
}
let course_5 = {
	cNum: "CS280",
	marks: 90
}

var coursesList = [course_1, course_2, course_3, course_4, course_5]

let student ={
	id: 101,
	name: "Dipam",
	course: coursesList
}

function highestMarks(student) {
	// console.log(student.course)
	maxCourse = ""
	for(i=0; i<student.course.length-1; i++){
		if(student.course[i+1]["marks"] > student.course[i]["marks"]){
			maxCourse = student.course[i+1].cNum
		}
	}
	return maxCourse
}
console.log(highestMarks(student))

/*Note - the function worked according to array but the actual solution can be found in the 
file 10p5.js */

//Redo the problem that was done today (5 course object, one handler student, one function with one prarameter) Return the name of course with highest marks

let course_1 = {
	courseNum : "CS491",
	marks: 95
}

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
	courses: courseList
}

function highestMark(give1) {
	maxMark = student.courses[0]["marks"]
	for(i=0; i<student.courses.length; i++){
		if(student.courses[i]["marks"] > maxMark){
			maxMark = student.courses[i].courseNum
		}
	}
	 return maxMark
}
console.log(highestMark(student))

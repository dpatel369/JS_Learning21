//Use switch case to count GPA
let course_1 = {
	courseNum : "CS491",
	// marks: 95
	Grade: "A"

}

let course_2 = {
	courseNum : "CS490",
	// marks: 96
	Grade: "B+"
}

let course_3 = {
	courseNum : "CS332",
	// marks: 85
	Grade: "B"
}

let course_4 = {
	courseNum : "CS280",
	// marks: 94
	Grade: "C+"
}

let course_5 = {
	courseNum : "CS435",
	// marks: 65
	Grade: "C"
}

var courseList = [course_1, course_2, course_3, course_4, course_5]


let student = {
	id: 1234,
	name: "Hari",
	courses: courseList,
	getGpa(){
		sum = 0
		for(i=0; i<this.courses.length; i++){
			switch(this.courses[i]["Grade"]){
				case "A":
				mark = 4.0;
				break;

				case "B+":
				mark = 3.5;
				break;

				case "B":
				mark = 3.0;
				break;

				case "C+":
				mark = 2.5;
				break;

				case "C":
				mark = 2.0;
				break;
			}
			sum = mark + sum
		}
		avg = sum/this.courses.length
		return avg
	}
}

console.log(student.getGpa())
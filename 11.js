//1 Conditional (ternary) operator  

//Ternary condition is followed by a (?) and then expression to execute if true and followed by (:) expression to execute if the condition is false.
// null, NaN, 0, the empty string (""), and undefined = return if exprIfFalse (expression after semicolon)
// var age = 25
// var check = (age < 20) ? "HI" : "Bye";
// console.log(check)


//2
// function speak(input) {
// 	console.log(input)
// }
// // speak("Hello")

// let animal ={
// 	type: "Dog",
// 	speak
// }
// // animal.speak("Hi")
// console.log(Object.values(animal))

//varibale doesn't have data type beacause it holds the address of value 
// value hold the data type 


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
		sum = 0
		for(i=0; i<this.courses.length; i++){
			sum = this.courses[i]["marks"] + sum
		}
		avg = sum/this.courses.length;
		return avg;
	}
}

console.log(student.highestMark())





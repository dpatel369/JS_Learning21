//1
// let employee_1={Name:"John",
// 				id: 100
// }
// console.log(employee_1)

// employee_2 = employee_1 


// let employee_3 = {Name:"John",
// 				  id: 100
// 				  }
// console.log(employee_1==employee_3)

// console.log(employee_1.Name)
// employee_2.Name = "Dipam"
// console.log(employee_1.Name)


//2
// let student = {"name":"Dipam",
// 			phoneNum: "(551)226-3521",
// 			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
// 			college: "NJIT",
// 			Degree: "B.S. CS",							
// 			"Birth Date": "10/05/1998",
// 			Specs: false,								//assign boolean val for one of the property
// 			car : ["Camry", "Audi", "Range"],			//array of strings
// 								//Contains array of different objects
// 			}  											//to call this property student["Birth Date"]
// student.age=22											// adding age key val using handler/object (student.age)
// //  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// // console.log("car" in student)						//Check if the keyvalue is in the object
// //console.log(Object.keys(student))
// // student.course = ["CS491", "CS435", "CS332", "CS100", "CS228"]
// // student.professor = ["Patel", "Shah", "Naik", "Kohli", "RS"]
// // student.grades = ["D","C", "B", "A","F"]
// // student.CourseTime = ["Fall-18", "Spring-18", "Fall-19", "Spring-19","Spring-20"]
// // console.log(student)

// for( val in student){						//Itreating into the objects
// 	console.log(val)						//Print the value of keys
// }
// console.log(student.abc)
// console.log(student.pqr)
// console.log(student.key)


//3

// let course_1 = {
// 	cNum: "CS491",
// 	marks: 55
// }
// let course_2 = {
// 	cNum: "CS490",
// 	marks: 75
// }
// let course_3 = {
// 	cNum: "CS435",
// 	marks: 70
// }
// let course_4 = {
// 	cNum: "CS332",
// 	marks: 85
// }
// let course_5 = {
// 	cNum: "CS280",
// 	marks: 90
// }

// var coursesList = [course_1, course_2, course_3, course_4, course_5]

// let student ={
// 	id: 101,
// 	name: "Dipam",
// 	course: coursesList
// }

// function highestMarks(student) {
// 	// console.log(student.course)
// 	var x = student.course
// 	maxCourse = ""
// 	for(i=0; i<x.length-1; i++){
// 		if(x[i+1]["marks"] > x[i]["marks"]){
// 			maxCourse = x[i+1].cNum
// 		}
// 	}
// 	return maxCourse
// }
// console.log(highestMarks(student))

//4
let course_1 = {
	cNum: "CS491",
	marks: 55
}

// function displayKey(input1){
// arr = []
// 	for( val in input1){
// 		arr.push(val)
// 	}
// 	return arr
// }
// console.log(displayKey(course_1))

function displayVal(input1) {
arrlist = []
	for(values in input1){
		arrlist.push(input1[values])
	}
	return arrlist
}
console.log(displayVal(course_1))

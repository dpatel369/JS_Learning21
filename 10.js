if('1'=== true){
	console.log("Hello World!")
} 
=== checks for types and value 
while == checks for value 



//2
// let student = {"name":"Dipam",
// 			phoneNum: "(551)226-3521",
// 			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
// 			college: "NJIT",
// 			Degree: "B.S. CS",							
// 			"Birth Date": "10/05/1998",
// 			Specs: false,								//assign boolean val for one of the property
// 			car : ["Camry", "Audi", "Range"],
// 			}  											//to call this property student["Birth Date"]
// student.age=22											// adding age key val using handler/object (student.age)
// //  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// // console.log("car" in student)						//Check if the keyvalue is in the object
// //console.log(Object.keys(student))
// // student.course = ["CS491", "CS435", "CS332", "CS100", "CS228"]
// // student.professor = ["Patel", "Shah", "Naik", "Kohli", "RS"]
// // student.grades = ["D","C", "B", "A","F"]
// // student.CourseTime = ["Fall-18", "Spring-18", "Fall-19", "Spring-19","Spring-20"]
// console.log(student)




//3


// let player_1={name:"Rohit",						//use let to start declaring the object(Player_1 is handler)
// 			age:31,							    // everthing inside the handle is known as object with different properties and value
// 			height:5,
// 			runs:3000,
// 			wickets:10}
// console.log(player_1.runs)						//Use handler/object name with (.) and property name to print it's value

// let player_2={name:"Kohli",
// 			age:30,
// 			height:5,
// 			runs:5000,
// 			wickets:8}
// console.log(player_2.name)

// let player_3={name:"Dhoni",
// 			age:39,
// 			height:6,
// 			runs:6000,
// 			wickets:1}
// console.log(player_3.name)

// let player_4={name:"Raina",
// 			age:34,
// 			height:5,
// 			runs:5200,
// 			wickets:9}
// console.log(player_4.name)

// var list = [player_1,player_2,player_3,player_4]
// console.log(list)


//4

let course_1 = {Name:"CS - 490" ,
				Grade: "B",
				"Professor Name": "Patel"
			}

let course_2 = {Name:"CS - 491" ,
				Grade: "C",
				"Professor Name": "Kohli"
			}

let course_3 = {Name:"CS - 332" ,
				Grade: "A",
				"Professor Name": "Dhoni"
			}

let course_4 = {Name:"CS - 370" ,
				Grade: "A",
				"Professor Name": "Naik"
			}
let course_5 = {Name:"CS - 352" ,
				Grade: "C+",
				"Professor Name": "Shah"
			}

var courses = [course_1, course_2, course_3, course_4, course_5]
// console.log(courses)





let student = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
			college: "NJIT",
			Degree: "B.S. CS",							
			"Birth Date": "10/05/1998",
			Specs: false,								//assign boolean val for one of the property
			car : ["Camry", "Audi", "Range"],			//array of strings
			courses : courses							//Contains array of different objects
			}  											//to call this property student["Birth Date"]
student.age=22											// adding age key val using handler/object (student.age)
//  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// console.log("car" in student)						//Check if the keyvalue is in the object
//console.log(Object.keys(student))
// student.course = ["CS491", "CS435", "CS332", "CS100", "CS228"]
// student.professor = ["Patel", "Shah", "Naik", "Kohli", "RS"]
// student.grades = ["D","C", "B", "A","F"]
// student.CourseTime = ["Fall-18", "Spring-18", "Fall-19", "Spring-19","Spring-20"]
console.log(student)
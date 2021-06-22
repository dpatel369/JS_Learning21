if('1'== true){
	console.log("Hello World!")
} 
// > "2"==2
// true
// > "2"===2
// false
// === checks for types and value 
// while == checks for value 


//2 add using array ignore object


let studentss = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
			college: "NJIT",
			Degree: "B.S. CS",							
			"Birth Date": "10/05/1998",
			Specs: false,								//assign boolean val for one of the property
			car : ["Camry", "Audi", "Range"],
			}  											//to call this property student["Birth Date"]
studentss.age=22											// adding age key val using handler/object (student.age)
//  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// console.log("car" in student)						//Check if the keyvalue is in the object
//console.log(Object.keys(student))
studentss.course = ["CS491", "CS435", "CS332", "CS100", "CS228"]
studentss.professor = ["Patel", "Shah", "Naik", "Kohli", "RS"]
studentss.grades = ["D","C", "B", "A","F"]
studentss.CourseTime = ["Fall-18", "Spring-18", "Fall-19", "Spring-19","Spring-20"]
console.log(studentss)


//3 use Object to have better version
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


let students = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
			college: "NJIT",
			Degree: "B.S. CS",							
			"Birth Date": "10/05/1998",
			Specs: false,								//assign boolean val for one of the property
			car : ["Camry", "Audi", "Range"],			//array of strings
			courses : courses							//Contains array of different objects
			}  											//to call this property student["Birth Date"]
													// adding age key val using handler/object (student.age)
//  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// console.log("car" in student)						//Check if the keyvalue is in the object
//console.log(Object.keys(student))
console.log(students)



//4Itreating into the objects

let student = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
			college: "NJIT",
			Degree: "B.S. CS",							
			"Birth Date": "10/05/1998",
			Specs: false,								//assign boolean val for one of the property
			car : ["Camry", "Audi", "Range"],			//array of strings
			}  											//to call this property student["Birth Date"]
											// adding age key val using handler/object (student.age)

for( val in student){						//Itreating into the objects
	console.log(val)						//Print the value of keys
	console.log(student[val])
}
console.log(student.abc)
console.log(student.pqr)
console.log(student.key)
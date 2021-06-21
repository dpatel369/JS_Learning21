//Creating Object

let student = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",
			college: "NJIT",
			Degree: "B.S. CS",
			"Birth Date": "10/05/1998",
			Specs: false,
			car : ["Camry", "Audi", "Range"]
			}  //to call this property student["Birth Date"]
student.age=22
delete student.age
console.log(student)


Object

let student = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",
			college: "NJIT",
			Degree: "B.S. CS",
			"Birth Date": "10/05/1998",
			Specs: false,
			car : ["Camry", "Audi", "Range"]
			}  //to call this property student["Birth Date"]
student.age=22
//  student.car.push("Honda", "KIA")
// console.log("car" in student)
console.log(Object.keys(student))
// console.log(student)


//
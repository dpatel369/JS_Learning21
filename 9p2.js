//Creating Object cont

let student = {"name":"Dipam",							
			phoneNum: "(551)226-3521",				   //Using normal property name
			email_Id: "dp482@njit.edu",			
			college: "NJIT",
			Degree: "B.S. CS",
			"Birth Date": "10/05/1998",					//To call a key value with space no special characters you must put the property name in quotation("")
			Specs: false,
			car : ["Camry", "Audi", "Range"]			//storing the car list as array
			} 
student.age=22											// adding a new property
delete student.age									    //to delete the age property & it value
console.log(student)									//to call this property student["Birth Date"]


Object

let student = {"name":"Dipam",
			phoneNum: "(551)226-3521",
			email_Id: "dp482@njit.edu",					//Property name with (_) doesn't need quotation
			college: "NJIT",
			Degree: "B.S. CS",							
			"Birth Date": "10/05/1998",
			Specs: false,								//assign boolean val for one of the property
			car : ["Camry", "Audi", "Range"]
			}  											//to call this property student["Birth Date"]
student.age=22											// adding age key val using handler/object (student.age)
//  student.car.push("Honda", "KIA")					//Using push to add value in the end of array list
// console.log("car" in student)						//Check if the keyvalue is in the object
console.log(Object.keys(student))						//Print all the property inside the handler student 
														//.keys is just a method of object

// console.log(student)


/*Learned - Obejct = store multiple values with property into a one memory address. The values can be ("String", num, boolean, etc)
Handler/ Object/ Properties
 creating object
 calling peoperty(key value) = (.) or ([""])
 property name with space need to be stored as a string
 adding = Handler.Property = Val
 removing = delete handlerName.propertyName
 Storing at the end of array = Handler.property.push("Val1","Val2")
 to check if certain properties exist in an object = concole.log("propery" in object) = return true or false
 Print list of property = Object.keys(handler)
 print val = Object.value(handler)*/
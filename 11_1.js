// let student={
// 	name: "Dipam",
// 	display(input){   					 //method of object AKA function of object
// 		console.log("Hello World"+" "+input+" "+student.name)
// 	}
// }
// student.display("I am")


//Use this same problem as above 
//when you want to access the current object you can use this instead of using objectname 
//student.name can be = (this.name)
let student={
	name: "Dipam",
	display(input){   					 //method of object AKA function of object
		console.log("Hello World"+" "+input+" "+this.name)
	}
}
student.display("I am")


// 1 Take 5 objects and store it into a one array
let player_1={name:"Rohit",						//use let to start declaring the object(Player_1 is handler)
			age:31,							    // everthing inside the handle is known as object with different properties and value
			height:5,
			runs:3000,
			wickets:10}
console.log(player_1.runs)						//Use handler/object name with (.) and property name to print it's value

let player_2={name:"Kohli",
			age:30,
			height:5,
			runs:5000,
			wickets:8}
console.log(player_2.name)

let player_3={name:"Dhoni",
			age:39,
			height:6,
			runs:6000,
			wickets:1}
console.log(player_3.name)

let player_4={name:"Raina",
			age:34,
			height:5,
			runs:5200,
			wickets:9}
console.log(player_4.name)

var list = [player_1,player_2,player_3,player_4]
console.log(list)


// 2 

let employee_1={Name:"John",
				id: 100
}
console.log(employee_1)

employee_2 = employee_1 


let employee_3 = {Name:"John",
				  id: 100
				  }
console.log(employee_1==employee_3)

console.log(employee_1.Name)
employee_2.Name = "Dipam"
console.log(employee_1.Name)



//3 display key and val using two function 

let course_1 = {
	cNum: "CS491",
	marks: 55
}

function displayKey(input1){
arr = []
	for( val in input1){
		arr.push(val)
	}
	return arr
}
console.log(displayKey(course_1))

function displayVal(input1) {
arrlist = []
	for(values in input1){
		arrlist.push(input1[values])
	}
	return arrlist
}
console.log(displayVal(course_1))


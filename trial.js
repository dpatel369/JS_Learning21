// let course_1 = {
// 	courseNum : "CS491",
// 	// marks: 95
// 	Grade: "A"

// }

// let course_2 = {
// 	courseNum : "CS490",
// 	// marks: 96
// 	Grade: "B+"
// }

// let course_3 = {
// 	courseNum : "CS332",
// 	// marks: 85
// 	Grade: "B"
// }

// let course_4 = {
// 	courseNum : "CS280",
// 	// marks: 94
// 	Grade: "C+"
// }

// let course_5 = {
// 	courseNum : "CS435",
// 	// marks: 65
// 	Grade: "C"
// }

// var courseList = [course_1, course_2, course_3, course_4, course_5]


// let student = {
// 	id: 1234,
// 	name: "Hari",
// 	courses: courseList,
// 	calcGpa(){
// 		sum = 0
// 		for(i=0; i<this.courses.length; i++){
// 			switch(this.courses[i]["Grade"]){
// 				case "A":
// 				mark = 4.0;
// 				break; 

// 				case "B+":
// 				mark = 3.5;
// 				break; 

// 				case "B":
// 				mark = 3.0;
// 				break;

// 				case "C+":
// 				mark = 2.5;
// 				break;

// 				case "C":
// 				mark = 2.0;
// 				break;
// 			}
// 			sum = mark + sum
// 		}
// 		avg = sum/this.courses.length
// 		return avg
// 	}	
// }
// console.log(student.calcGpa())


// nums = [1,2,3,1,1,3]

// function numIdenticalPairs(nums) {
// 	var count = 0
// 	for(i=0; i<nums.length; i++){
// 		for(j=i+1; j<nums.length; j++){
// 			if(nums[i]==nums[j] && i<j){
// 				count++
// 			}
// 		}
// 	}
// 	return count
// }
// console.log(numIdenticalPairs(nums))




// for(i=2; i<Math.trunc(Math.sqrt(11)); i++){
// 	if(14%i==0){
// 		console.log("Not a prime")
// 	}
// 	else{
// 		console.log("Prime")
// 	}
// }

var list = [[1,2,3],[4,5,6]]

function transpose(matrix){
	var number= []
	var tr = []
	for(i=0; i<matrix[0].length; i++){
		number = []
		for(j=0; j<matrix.length; j++){
			console.log("	j", j)
			number.push(matrix[j][i])
	}
	tr.push(number)
}
return tr
}

console.log(transpose(list))


var a  = [2,3,4,5]

const index = a.indexOf(4);
a.splice(index, 1)


console.log(a)

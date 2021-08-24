//1700. Number of Students Unable to Eat Lunch

var countStudents = function(students, sandwiches) {
	while(true) {
		var count=0
	for(var i=0; i<students.length; i++) {
		if(students[0]==sandwiches[0]){
			students.shift()
			sandwiches.shift()
			count++
		}else{
			var x = students[0]
			students.shift()
			students.push(x)
		}
	}
	if(count==0){
		break;
	}
}
	return sandwiches.length
}

var students = [1,1,1,0,0,1]
var sandwiches = [1,0,0,0,1,1]
console.log(countStudents(students, sandwiches))

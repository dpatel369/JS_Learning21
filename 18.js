//closure - binding to parent lexical scope

function add(num) {
	return function(val) {
		return num + val;
	}
}

var wow = add(5);
console.log(wow(4))   //9

var addSeven = add(6);
console.log(addSeven(2)); //8

console.log(wow(addSeven(3))); //14


function f(a) {
	function g() {
		let b = 2;
		return a+b;
	}
	return g;
	// return g();
}
let h = f(2);
console.log(h()) //4

h = f(3);
console.log(h()) //5


//HW make a closure for cricket player statistics
// add run , wicket, MOM, avg , match playe (Functions)


//Module (starting to page 63)

//explain all the codes
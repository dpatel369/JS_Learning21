function f(a) {
	{
		let b = 2;
	}
	return a + b;
}
console.log(f(1)) //ReferenceError

//Lexing compiler stores var f(global scope) var a (function f scope) and store let b as non variable (let and const = non variable)
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a = 1
//on the return line flocoman ask scope for RHS of var a and b
//In the return it get only value of a and not b because b can't be accessed (It treats b as not a variable)
//So flocoman gives console the value 1 and not defined for b so the result to display = ReferenceError
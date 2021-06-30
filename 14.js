function f(a){
	if(a==2){
		let c = 1;
	}
	else{
		let c = 2;
	}

	return a+c;
}

console.log(f(2)) //ReferenceError


//Lexing compiler stores var f(global scope) var a (function f scope) and store let c in if and else
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a =2
//on the return line flocoman ask scope for RHS of var a and c
//In the return it get only value of a and not c because c is only inside of if and else block which can't be accessed (It treats c as not a variable)
//So flocoman gives console the value 2 and not defined for c so the result to display = ReferenceError
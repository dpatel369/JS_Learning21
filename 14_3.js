function f(a){
	if(a==2){
		const c = 1;
	}
	else{
		const c = 2;
	}

	return a+c;
}

console.log(f(1)) //ReferenceError

//Lexing compiler stores var f(global scope) var a (function f scope) and store const c in if and else block (treat c as not variable)
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a =1
//on the return line flocoman ask scope for RHS of var a and c
//In the return it get only value of a and not c because c is only inside of if and else block which can't be accessed (It treats c as not a variable)
//So flocoman gives console the value 2 and not defined for c so the result to display = ReferenceError
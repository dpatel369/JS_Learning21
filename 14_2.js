function f(a){
	if(a==2){
		let c = 1;
	}
	else{
		var c = 2;
	}

	return a+c;
}
console.log(f(2)) //NaN
console.log(f(1)) //3 

//Principle of least privilages(Declare the varibale to place where you closet want to use or just in the block where you want to use it)
// Hoisting if var and function has the same name then the funtion name gets the priority

//Lexing compiler stores var f(global scope)  var c  (function f scope) and c in if block because of let
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a =2
//( c=2 for function scope ) and let c (It treats c as not a variable))
//on the return line flocoman ask scope for RHS of var a and c 
//In the return it get value of a and  not c that is inside of if because even though the condition was true it can't be accessed outside of if block (It treats c as not a variable)
//So flocoman gives console the value 2 and undefined c to display result = NaN

//Lexing compiler stores var f(global scope)  var c  (function f scope) and c in if block because of let
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a = 1
// ( c=2 for function scope ) and (It treats c as not a variable)
//on the return line flocoman ask scope for RHS of var a and c 
//In the return it get value of a and  var c that is stored in function scope 
//So flocoman gives console the value a= 1 and c= 2 to display result = 3
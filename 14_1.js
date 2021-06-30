function f(a){
	if(a==2){
		var c = 1;
	}
	else{
		var c = 2;
	}

	return a+c;
}

console.log(f(2)) //3

//Lexing compiler stores var f(global scope) var a,  var c  (function f scope)
//Flocoman comes at function line and ignore all the lines until function call
//Fucntion call with RHS value a =2
//Set c = 1 and  c=2 
//on the return line flocoman ask scope for RHS of var a and c 
//In the return it get value of a and c inside of if because the if conidition is true
//So flocoman gives console the value 2 and 1 to display result = 3
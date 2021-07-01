var a = 2;
console.log(a); //2

//FLOCO MAN 
//Compiler
//Scope 


// 1 First the compiler will use lexing and it will tell compiler that there is var A 
// 2 Scope is aware that there is variable known as A
// 3 Floco man comes in at line 1 and ask scope if scope knows about a and in return scope will tell floco man that var a is stored at this memory location 
// 4 Floco man takes the address of var a and store 2 as value of variable A because it knows that a =2 (expression is used)
// 5 Floco man goes to line to and it knows that function is being called so it ask scope about var a
// 6 Scope gives the location of var a
// 7 floco man knows that it's (RHS) refrence so it will gives the value to console to print it

function f(){
	console.log("Hello World!")
}
f()    //result Hello World!

// 1 Compiler - lexing and it will tell compiler there is var f (Global scope)
// 2 Scope - is aware that there is variable known as a f with it's location
// 3 Floco man - ask scope if scope knows about var f and return scope give it's location
// 4 Floco man - ignores the function scope inside and move on to next line where it find function is called (LHS)
// 5 Floco man - ask scope about var f and scope finds it in the global scope
// 6 Floco man - gives the string value to console log to print it 


function g(a) {
	var b = 2;
	return a+b+c;
}
console.log(g(2)); //NaN
var c = 1;
console.log(g(2)); //5

// 1 Compiler - lexing and it will tell compiler about var g , var c(Global Scope) and var a, var b(Function scope)
// 2 Scope - is knows about var g and var b and has it's memory address
// 3 flocoman - function call line line 34 (RHS) with value a = 2
// 4 flocoman - return statement and ask scope for RHS of var a, b,c
// 5 Scope - gives memeory address of a and b but say don't have var c because it is outside the function scope
// 6 flocoman - takes a=2 and b=2 and c=NaN and gives the console NaN to print
//line 36
// Repeat step 1-6 but this time uses c value and gives console value of 5 to print 


function h(a){
	b = 2;
	return a+b;
}
console.log(h(2)); //4
console.log(b);    //2


// 1 Compiler - lexing and it will tell compiler about var h(Global Scope)
// 2 Scope - knows about var h has it's memory address
// 3 flocoman - function call h(2) line line 52 (RHS) with value a = 2
// 4 flocoman - tells that I have b = 2 (RHS) so the global scope accept that as var b just so the program doesn't fail
// 5 flocoman - return statement and ask scope for RHS of var a, b
// 6 Scope - gives memeory address of a (function scope) and say don't have b so it ask global scope and get's the addres
// 7 flocoman - takes a=2 and b=2 and gives the console 4 to print

//function call (b) LHS
//flocoman - ask scope for var b
// Scope - FS doesn't have any var b/ global scope says I have b = 2 and give's the address
// flocoman - takes the value and give it to console to print it



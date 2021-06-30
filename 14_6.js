//Hoisting cont
f("Hi")

function f(a){
	console.log("Hello,	" + a)
}

console.log(typeof(g))
g()
var g = 5;
//console.log(typeof(g)) //number


function g() {
	console.log("Hello!")
}

//console.log(typeof(g)) //number
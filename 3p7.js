//simple calculation of two given numbers


// function adding( a , b ) { //function header with two parameters
// 	return a + b //body
// }

// function divison ( c, d ) { //function header with two parameters
// 	return c / d //body
// }

// function multiplication ( g , h ) { //function header with two parameters
// 	return g * h //body
// }

// function subtraction ( p , h ) { //function header with two parameters
// 	return p - h ///body
// }

// p = adding( 5 ,3 )
// console.log(" Adding of two integers is " + p )
// q=divison( 15 , 5 )
// console.log(" Division of two number is " + q )
// r=multiplication( 2, 3 )
// console.log(" Multiplication of two integers " +r )
// s=subtraction( 5, 2 )
// console.log(" Subtracting two digits "+ s )

// simpler version & better version

//function inside a function 

function Calc( c1, c2 ) { //Header
	function adding() { //Header
		return c1 + c2 //body
	}
	function division(){ //Header
		return c1 / c2 //body
	}
	function multiplication() { //Header
		return c1 * c2
	}
	function substraction () { //Header
		return c1 - c2 //body
	}
	return "Addition = "+adding() +" "+ "Division = " + division() +" "+ "Multiplication = " + multiplication()+" "+"Subtracting = "+ substraction()
}
console.log(Calc(6,3)) //calling function

/*learn = How code can be simplified when something is being repeated
Varibale of parent function can be used in child function.*/



// console.log("Hello World!")

// function mul(a,b){
// 	c=a*b
// 	return c
// }

// // console.log(mul(5,3))



// function printHW(){
// 	a = "Hello World!"
// 	return a
// }

// console.log(printHW())



// function welcomeintro(b){
// 	a= "My name is "
// 	c=a+b
// 	return c
// }

// console.log(welcomeintro("Dipam"))


// function cube(num){
// 	a=num**3
// 	return a
// 	console.log("Hello World")
// }
//  // console.log(cube(5))
//  // console.log("clean Washroom")
// // x=cube(10)
// // console.log(x)
// // console.log(a)

// function tempCon( cel ) {
// 	return ( cel * 9/5 ) + 32	
// }
// currentTempInCelsius = 10
// convertedTempIntoFahrenheit = tempCon(currentTempInCelsius)
// console.log("Current Weather is "+ currentTempInCelsius + " Degree Celsius ")
// console.log("Current weather is "+ convertedTempIntoFahrenheit + " Degree Fahrenheit ")


// function adding( a , b ) {
// 	return a + b
// }

// function divison ( c, d ) {
// 	return c / d
// }

// function multiplication ( g , h ) {
// 	return g * h
// }

// function subtraction ( p , h ) {
// 	return p - h
// }

// p = adding( 5 ,3 )
// console.log(" Adding of two integers is " + p )
// q=divison( 15 , 5 )
// console.log(" Division of two number is " + q )
// r=multiplication( 2, 3 )
// console.log(" Multiplication of two integers " +r )
// s=subtraction( 5, 2 )
// console.log(" Subtracting two digits "+ s )


// function somethingNew( name1, name2, name3 ) {  //(Header// Method signature(paramter to function name onyly))
// 	console.log( name1 +" "+ name2 +" "+ name3 ) //Body
// }
// somethingNew( "Jaybhai","Meetbhai","Brijeshbhai","Dipam") //function call 

/*After calling the function name you can have any number of parameters. 
You can request <= parameters it won't give you any error 
but if you request anything more than what was assigned then you will get undefined error at console.
Caling function you can have any number of parameters but it will only print the number of parameters that 
were assigned in the mehtod signature*/

//function call inside function(Ledder)

// function tempCon( cel ) {
// 	return ( cel * 9/5 ) + 32	
// }
// function display(){ 
// currentTempInCelsius = 10
// convertedTempIntoFahrenheit = tempCon(currentTempInCelsius) //function call 
// console.log("Current Weather is "+ currentTempInCelsius + " Degree Celsius ")
// console.log("Current weather is "+ convertedTempIntoFahrenheit + " Degree Fahrenheit ")
// }

// display()


// function inside a function 
// function Calc( c1, c2 ) {
// 	function adding() {
// 		return c1 + c2
// 	}
// 	function division(){
// 		return c1 / c2
// 	}
// 	function multiplication() {
// 		return c1 * c2
// 	}
// 	function substraction () {
// 		return c1 - c2
// 	}
// 	return "Addition = "+adding() +" "+ "Division = " + division() +" "+ "Multiplication = " + multiplication()+" "+"Subtracting = "+ substraction()
// }
// console.log(Calc(6,3))

//Varibale of parent function can be used in child function.



// //function returns another function
// function display1() {
// 	return "Hello"
// }
// function display2() {
// 	return display1()
// }
// console.log(display2())








// var arrswap = function( a ) { //function header with a header
// 		// p=a[0] //set value of a[0] equal to p
// 		// q=a[2] //set value of a[2] equal to q
// 		// list =[] //list equal to empty array list
// 	x = (a.length)/2
// 	p = x
// 	y = []
// 	for( i=0;i<x;i++ ) { //iterate 
// 		y[i] = a[p]
// 		y[p] = a[i]
// 		p++
// 	}
// 	return y //return the swapped array
// }
// console.log(arrswap([ 1, 5, 2, 3])) //calling a function 





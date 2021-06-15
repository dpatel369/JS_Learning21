//tempConvert Celsius to Fahrenheit


function tempCon( cel ) { //Header
	return ( cel * 9/5 ) + 32	//body
}
currentTempInCelsius = 10 //Setting input value to a variable
convertedTempIntoFahrenheit = tempCon(currentTempInCelsius) //calling function and storing it
console.log("Current Weather is "+ currentTempInCelsius + " Degree Celsius ") //print
console.log("Current weather is "+ convertedTempIntoFahrenheit + " Degree Fahrenheit ") //print

/*Learn - Declaring varibale and calling function within. Convert current celsius temp
by putting the value in line 7 and you will get the degree of Fahrenheit in return*/


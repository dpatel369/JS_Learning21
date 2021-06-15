//name(string) print

function somethingNew( name1, name2, name3 ) {  //(Header// Method signature(paramter to function name only))
	return ( name1 +" "+ name2 +" "+ name3  ) //Body
}
console.log(somethingNew( "Jaybhai","Meetbhai","Brijeshbhai","Dipam")) //function call 


/*After calling the function name you can have any number of parameters. 
You can request <= parameters it won't give you any error 
but if you request anything more than what was assigned then you will get undefined error at console.
Caling function you can have any number of parameters but it will only print the number of parameters that 
were assigned in the mehtod signature*/
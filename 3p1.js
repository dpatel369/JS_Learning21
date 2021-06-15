//Swami Shreeji
//Pattern using function
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
/*By doing this practice problem I learned how to print 
pattern with any number of size and type of input(*,+,@) using the function with 
two parametrs where one is used for number of lines and one is used for pattern style. */

function printPatterns( input1, input2 ) { //function header with name and parameter

	for(var g=0;g<input2;g++){ //iterate 
	if(g%2){ //check for odd num
			var p = (input2-g)/2 
			for(var c=0; c<p;c++){ 
				process.stdout.write(" ") //blank space
			}
	for(var m=0;m<g;m++){
		process.stdout.write(input1) //print input 1
	}
}
	process.stdout.write("\n") //new line
}

for(var n=input2-2;n>0;n--){ //bottom of the diamond
	if(n%2){
			var r = (input2-n)/2
			for(var z=0; z<r;z++){
				process.stdout.write(" ")
			}
	for(var m=0;m<n;m++){
		process.stdout.write(input1)
	}
}
	process.stdout.write("\n")
}

}
printPatterns( "*", 20) //function calling 


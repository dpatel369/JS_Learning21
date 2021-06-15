//Swami Shreeji
//Finding the Min num from array 

function minnum( a ) { 						//function header with one parameter
	numlist = a[0] 							//numlist euqal to first index value
	for(i=0; i<a.length; i++) { 			//iterate the loop based on the array length
		if( a[i] < numlist){ 				//check condition
			numlist = a[i] 					//store the value of if condition if it's true
		}
	}
	return numlist 							//return the value
}
console.log(minnum([8,5,2,9,3,-5])) 		//calling a function 
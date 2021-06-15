//Index position using function
//try any one name
//1

var myFav = ["Dhoni", "Kohli", "Raina", "Iyer", "Jadeja"]      //Initializing array
for(i=0; i<myFav.length; i++) {								   //Iterate
	if(myFav[i]=="Kohli")									   //Check if condition matches
	var x= i                                                   //Store the value into var x
}
console.log(x) 												   //Print using var x


//2
//Index value using function with two parametrs

function indexPos(arr, name){								  //function with 2 parameter
	for(i=0; i<arr.length; i++){							  //iterate
		if(arr[i]==name){									  //check condition
			return i                                          // return the index
		}
	}
}
var arr = ["Dhoni", "Kohli", "Raina", "Iyer", "Jadeja"]      //array initial can be done before function
var trial =indexPos(arr ,"Raina")							//Create a trial to hold the value of operation that calling funcation has done
console.log(trial)											//Print the stored value

/*Learned - find the index position using function and one where name is given as condition check
//Sum of all the even numbers in a array
//Using function with one parameter


var list = [1,3,4,8,10,15]								
function sumEven(num) {
	var p = 0 													//start with zero to add to first number
	for(i=0; i<num.length; i++){
		if(num[i]%2==0)	{										//Check for even num
			p = (num[i]+p)										//Operation
		}
	}
	return p                                                   //return the value 
}
var x = sumEven(list)										  //Calling function and storing it's value
console.log(x)									  			  //Print stored value

//Reverse the array and store it in new array and print both array list

var oldArr = [10,11,12,13,14,15]							 //Take one array
var newRevArr = []											 //Initialize variable to empty array list
for(i=0; i<oldArr.length; i++){								 //iterate
	var n = [oldArr.length-i-1]								 //Operation
	newRevArr[n] = oldArr[i]								//Store the result after operation into new array
}
console.log(oldArr)
console.log(newRevArr)										//Print the new array


/*Learned - Find Sum of all the even numbers in a array Using function with one parameter
Reverse the array and store it in new array and print both array.*/
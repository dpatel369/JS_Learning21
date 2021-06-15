//1
//Copy the array value of a into new array b

var a = [1,2,3,4,5]								//Declare initial array
var b = []										//Create b an empty array
for(i=0; i<a.length; i++) {
	b[i] = a[i]									//Assign value of initial array to b[i]
}
console.log(b)									//Print the new array

//2
//Insert value to array
var trylist = [1,2,3,4,5]						//Variable trylist had array list
console.log(trylist)							//Print the array
console.log(trylist.length)						//Find the length of array
trylist[5]=6									//Add new number at index 5
console.log(trylist)							//Print the array list

//3
//Insert and Remove value to array using Pop/Push

var newArr = [20,40,60,80]
for(p=0; p<newArr.length; p++) {
	console.log(newArr[p])
}
var a = newArr.push(30,45)						//push function is used to add new value at the end of array
console.log(newArr)
var b = newArr.pop()						    //pop function is used to remove the last value from the array(it automcatically delete the last value without any info)
console.log(newArr)
console.log(a,b)								//return the value that was stored within assigend varriable


/*Learned - Copy the value into new array. Insert value using the index.
Used Push function to add new value at the end of array.
Used Pop function to remove the value from the end of the list or at the last index.
Stored Push and Pop function into varibale printed to see what value it was holding. */

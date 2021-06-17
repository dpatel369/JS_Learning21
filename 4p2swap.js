//Swami Shreeji
/*given an array, write a function swap, swap(a,i,j) a[i]->a[j] and a[j]->a[i]  
For e.g. [1, 5, 2, 3], 0, 2 => [2, 5, 1, 3]*/

function arrswap( a ) { //function header with a header
		p=a[0] //set value of a[0] equal to p
		q=a[2] //set value of a[2] equal to q
		list =[] //list equal to empty array list
	for( i=0;i<a.length;i++ ) { //iterate 
		a[0]=q //a[0] become q
		a[2]=p //a[2] become p
		list[i]=a[i] //array stored in list
	}
	return list //return the swapped array
}
console.log(arrswap([ 1, 5, 2, 3])) //calling a function 


//6/15/21

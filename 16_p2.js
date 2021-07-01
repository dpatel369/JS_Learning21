//Binary Search using Recursion 
/* Binary seach = half-interval search, logarithmic search, or binary chop, is a search algorithm that 
finds the position of a target value within a array */

var arr = [10,20,30,40,50,60,70,80,90,10,110,60,120,130,140,150,160,170,180,190,200,300]
function indexSearch(given1, given2, given3, given4) {
	var middleind = (given4+given3)/2
	middleind = Math.trunc(middleind)
	if(given3>given4){
		return -1
	}
	if(arr[middleind]==given2){
		return middleind
	}
	if(arr[middleind]>given2){
		return indexSearch(given1, given2, given3,middleind-1)
	}
	if(arr[middleind]<given2){
		return indexSearch(given1, given2, middleind+1, given4)
	}
}

console.log(indexSearch(arr, 300, 0, arr.length))
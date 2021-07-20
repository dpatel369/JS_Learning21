//Binary Search

function binarySearch(array, x, left, right) {
	var array = array.sort()
	if(left>right){
		return "Not in the array"
	}
	var mid = Math.trunc((left+right)/2)
	if(array[mid]==x){
		return mid
	}
	if(x>array[mid]){
		return binarySearch(array, x, mid+1,right)
	}else{
		return binarySearch(array, x, left,mid-1)
	}
}
var array = [0,1,2,4,9,5,8]
console.log(binarySearch(array,2, 0, array.length-1))
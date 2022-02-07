//Replace Elements with Greatest Element on Right Side

var replaceElements = function(arr) {
	var array=[]
	for(var i=0; i<arr.length; i++) {
		var currentNum = arr[i+1]
		for(var p=i+1; p<arr.length; p++) {
			if(arr[p]>currentNum) {
				currentNum = arr[p]
			}
		}
			array.push(currentNum)	
	}
	array[arr.length-1]=-1;
	return array
}

var arr = [40]
console.log(replaceElements(arr))

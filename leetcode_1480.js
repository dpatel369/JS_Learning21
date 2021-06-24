//1480. Running Sum of 1d Array


function arr_sum(a) {
	out=0
	listout = []
	for(i=0;i<a.length;i++){
		out=(a[i]+out)
		// console.log(out)
		listout[i] = out
	}
	return listout
}


console.log(arr_sum([1,3,9,20,6]))
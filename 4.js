// 1
// var a =[ 1 ,2 , 9, "hello", null, true]
// c=[]
// for(i=0; i<a.length;i++){
// 	c[i]=a[i]
// }
// console.log(c)


//2
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


console.log(arr_sum([1,3,9,20,6])) //without return in function it returns undefined


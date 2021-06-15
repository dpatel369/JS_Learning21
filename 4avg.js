//Average of the array

function avgarr(a){
	out=0
	for(i=0;i<a.length;i++){
		out =(a[i]+out)
	}
	return (out/a.length)
}
console.log(avgarr([1,2,3,10,7]))
//Array Swap 
var b = [10,200,30,40,150,60,70,180,90,100,110,120]
for(i=0; i<b.length; i=i+3) {
	x = b[i]
	b[i] = b[i+2]
	b[i+2] = x
}
console.log(b)




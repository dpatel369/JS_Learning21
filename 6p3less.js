//Print # that is less than given input number 

var numArr = [10,11,100,30,7,6,1,110,22]
var b =[]
var j = 0
function numLess(numArr,givenNum){
	for(i=0; i<numArr.length; i++){
		if(numArr[i]<givenNum){
			b[j] = numArr[i]
			j++
		}
	}
	return b
}
console.log(numLess(numArr, 55))
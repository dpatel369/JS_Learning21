//1
 // var list = [1,2,3,4,5,6,7,8,9,10]

// function indexReturn(input1, input2) {
// 	for(var i=0 ; i<input1.length; i++) {
// 		if(input1[i]==input2){
// 			return i
// 		}
// 	}
// }
// console.log(indexReturn(list, 10))

//Binary Search using Recursion

var list = [10,20,30,40,50,60,70,80,90,10,110,120,130,140,150,160,170,180,190,200]
function indexSearch(input1, input2, input3, input4) {
	console.log("input3", input3 ,"input4", input4)
	if(input3>input4) {
		return -1
	}
	var midIndex = (input3+input4)/2
	midIndex = Math.round(midIndex)
	if(input1[midIndex]==input2) {
		return midIndex
	}
	if(input1[midIndex]<input2) {
		return indexSearch(input1, input2, midIndex+1, input4)
	}
	if(input1[midIndex]>input2) {
		return indexSearch(input1, input2, input3, midIndex-1)
	}
}
console.log(indexSearch(list, 35, 0, list.length-1))



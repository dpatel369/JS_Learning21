//1
var arr = [[1,2,3],[20,80,-6],[7,8,9]]
for(var a=0 ; a<arr.length; a++){
	// console.log("i", i)
	var sum = 0
	for(var r =0 ; r<arr.length; r++){
		// console.log("	j", j)
		// console.log(arr[i][j])
		sum = arr[a][r] + sum
		// console.log( "		sum", sum)
	}
	console.log(sum)
}



//2

var arrs = [[400,2,3], [2000,7000,10], [1200,5000,9]]

function maxAvg(input1) {
	var sum = 0
	max = 0;
	for(var i = 0; i<input1.length; i++){
		sum = 0
		for(var j = 0; j<input1.length; j++)
			sum += arr[i][j] 
		if(sum > max)
			max = sum
	}
	return max
		
}

console.log(maxAvg(arrs))


//#1 repeat (SUM of the 2d array)

function twodArray(inputs) {
	var sums = 0
	for(var l=0; l<inputs.length; l++){
		for(var g=0; g<inputs.length; g++){
			sums = inputs[l][g] + sums
		}
	}
	return sums
}
var array = [[1,0,3],[1004,-2,6],[200,300,400]]
console.log(twodArray(array))


//2 max return
function twodArrayavg(argument1) {
	var total = 0
	max = 0
	for(var f=0; f<argument1.length; f++){
		total =0
		for(var a=0; a<argument1.length; a++){
			total = argument1[f][a] + total
			if(total >max){
				max = total
			}
		}
	}
	return max
}
console.log(twodArrayavg(array))
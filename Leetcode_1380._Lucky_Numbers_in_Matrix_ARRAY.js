//1380. Lucky Numbers in a Matrix

var luckyNumbers  = function(matrix) {
	for(var i=0; i<matrix[0].length; i++){
		var currentNum=0
		for(var p=0; p<matrix.length; p++){
			if(matrix[p][i]>currentNum){
				currentNum = matrix[p][i]
				var index = p
			}
		}
		if(currentNum == Math.min(...matrix[index])){
			return [currentNum]
		}
	}
	 	if(currentNum != Math.min(...matrix[index])){
			return []
		}
}

var matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
console.log(luckyNumbers(matrix))
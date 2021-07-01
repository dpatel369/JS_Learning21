var list = [[1,2,3],[4,5,6]]

function transpose(matrix){
	var number= []
	var tr = []
	for(i=0; i<matrix[0].length; i++){
		number = []
		for(j=0; j<matrix.length; j++){
			number.push(matrix[j][i])
	}
	tr.push(number)
}
return tr
}

console.log(transpose(list))
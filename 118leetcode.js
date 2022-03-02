//118. Pascal's Triangle

var generate = function(numRows) {
	var arrayOut = []
	for(var i=0; i<numRows; i++) {
		arrayOut.push([])
	}
	for(var p=0; p<numRows; p++) {
		if(p==0) {
			arrayOut[0].push(1)
		}
		else if(p==1) {
			arrayOut[1].push(1)
			arrayOut[1].push(1)
		}
		else{
			arrayOut[p].push(1)
			for(var q=0; q<arrayOut[p-1].length-1; q++) {
				arrayOut[p].push(arrayOut[p-1][q]+arrayOut[p-1][q+1])
			}
			arrayOut[p].push(1)
		}
}
	return arrayOut
}

var numRows = 5
console.log(generate(numRows))
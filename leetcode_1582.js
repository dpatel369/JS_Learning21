//1582. Special Positions in a Binary Matrix

var numSpecial = function(mat) {
	var arrhori = []
	var counttotal = 0
	for(var i=0; i<mat.length; i++){
		let count =0
		let val =0
		for(var p=0; p<mat[i].length; p++){
			if(mat[i][p]==1){
				count++
				val=p
			}	
		}
		if(count==1){
			arrhori.push(val)
		}
	}
	var arrver = []
	for(var s=0; s<mat[0].length; s++){
		let counts = 0
		for(var q=0;q<mat.length; q++ ){
			if(mat[q][s]==1){
				counts++
		}
	}
	if(counts>1){
		arrver.push(s)
	}
}

	if(arrver.length==0){
		return arrhori.length-counttotal
	}else{
		for(var a=0; a<arrver.length; a++){
			for(var b=0; b<arrhori.length; b++){
				if(arrver[a]==arrhori[b]){
					counttotal++
				}
			}
		}
	}
	return arrhori.length-counttotal
}
// var mat = [[1,0,0],[0,0,1],[1,0,0]]
// var mat = [[1,0,0],[0,1,0],[0,0,1]]
console.log(numSpecial(mat))
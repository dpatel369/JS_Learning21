// var arr = [1,2,4,3]

// function sort(n) {
// 	var currentNum=0
// 	for(var i=0; i<n.length; i++){
// 		if(n[i] > currentNum) {
// 			currentNum = n[i]
// 		}
// 	}
// 	return currentNum
// }

// console.log(sort(arr))

// var a = new Array(10);
// for(var i=0; i<10; i++){
// 	a[i] = i+10
// }


// console.log(a)

var arr = [[1,2,3],[4,5,6],[7,8,9]]

function matrix(n) {
	for(var i=0; i<n.length; i++) {
		for(var p=0; p<n[i].length; p++){
			console.log(n[p][i])
		}
	}
}

console.log(matrix(arr))


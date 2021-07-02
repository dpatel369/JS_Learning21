
// var grid = [1,2,3,4,5,6,7,8,9]

// function shiftGrid(arg) {
// 	for(var i=0; i<8; i++){
// 		console.log("i", i)
// 		var temp = arg[0]
// 		for(var p = 1; p<arg.length; p++){
// 			console.log("	p", p)
// 			x = arg[p]
// 			arg[p] = temp
// 			temp = x
// 			arg[0] = x
// 		}
// 		}
// 		return arg
// }
// console.log(shiftGrid(grid))

// var grid = [[1,2,3],[4,5,6],[7,8,9]]
// var grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]

console.log("--------------------------------------------------------------------------------------")

var grid = [[1],[2],[3],[4],[7],[6],[5]]

function shiftgrid(arg, k) {
	for(var i=0; i<k; i++) {
		console.log("i", i)
		for(var p=0; p<arg.length; p++){
			console.log("p", p)
			var temp = arg[0][0]
			for(var s=0; s<arg[p].length; s++){
			console.log("	s", s)
			x = arg[p][s]
			arg[p][s] = temp
			temp = x 
			arg[0][0] = x
		}
	}
	}
	return arg
}
console.log(shiftgrid(grid, 23))



console.log("--------------------------------------------------------------------------------------")


///leetcode better solution

// var shiftGrid = function(grid, k) {
//     for (let l=0; l<k; l++){
// 		var temp = grid[0][0];
// 		for (let i=0; i<grid.length; i++){
// 			for (let j=0; j<grid[i].length; j++){
// 				var t = grid[i][j];
// 				grid[i][j]=temp;
// 				temp=t
// 			}
// 		}
// 		grid[0][0]=temp
// 	}
// 	return grid
// };
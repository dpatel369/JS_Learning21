//Print index of the array

var list = [1,2,34,5,6,8,9,10]

var indexFind = function(input, num) {
	for(var i=0; i<input.length; i++){
		if(input[i]==num){
			return i
		}
	}
}
console.log(indexFind(list,  9))

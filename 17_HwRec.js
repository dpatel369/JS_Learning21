/*Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0
*/

function countX(input) {
	var string = input
	if(string.length== 0){
		return 0
	}
	var count = 0
	if(string.charAt(0) == "x"){
		count++
	}
	return count + countX(string.substring(1), string)
}

console.log(countX("xxxxxxix"))
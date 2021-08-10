//1047. Remove All Adjacent Duplicates In String

var removeDuplicates = function(s) {
	var list = []
	list.push(s[0])
	for(var i=1; i<s.length; i++) {
		if(s[i] == list[list.length-1]){
			list.pop()
		}else{
			list.push(s[i])
		}
	}
	return list.join('')
}

var s = "azxxzy"
console.log(removeDuplicates(s))
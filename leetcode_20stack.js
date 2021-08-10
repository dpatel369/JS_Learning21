//20. Valid Parentheses

var isValid = function(s) {
		var list=[]
	for(var i=0; i<s.length; i++) {
		var temp = list[list.length-1]
		if(s[i]=="(" || s[i]=="{" ||s[i]=="["){
			list.push(s[i])
		}else if(temp == "(" && s[i] == ")" || temp == "{" && s[i] == "}" || temp == "[" && s[i] == "]"){
			list.pop()
		}else return false
	}
	return list.length ? false:true
}

var input = "([)]"
console.log(isValid(input))
//1441. Build an Array With Stack Operations

var buildArray = function(target, n) {
	var list = []
	var output = []
	for(var i=1; i<=n ; i++) {
		list.push(i)
	}
	let p=0
	let s=0
	for(;p<list.length && s<target.length;) {
		if(list[p] == target[s]) {
			output.push("Push")
			s++
			p++
		}else{
			output.push("Push")
			output.push("Pop")
			p++
		}
	}
	return output
}

var target = [1,2]
var n = 4
console.log(buildArray(target, n))
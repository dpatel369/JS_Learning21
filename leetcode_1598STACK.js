//1598. Crawler Log Folder

var minOperations = function(logs) {
	var arr = []
	for(var i=0; i<logs.length; i++) {
		if(logs[i] != "../" && logs[i] != "./") {
			arr.push(logs[i])
		}else if(logs[i]=="../"){
			arr.pop()
		}
	}
	return arr.length
}

var logs = ["d1/","../","../","../"]
console.log(minOperations(logs))
//387. First Unique Character in a String

var firstUniqChar = function(s) {
	var stringArr = [...s]
		var totalcount=0
		while(true){
			var count=0
			if(totalcount==stringArr.length){
				return -1
			}
		for(var p=1; p<stringArr.length; p++){
			if(stringArr[0]==stringArr[p]){
				stringArr.push(stringArr.shift())
				count++
				totalcount++
				break
			}
		}
		if(count==0){
			break
		}
	}
	return totalcount
}
var s = "loveleetcode"
console.log(firstUniqChar(s))

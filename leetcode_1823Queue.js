//1823. Find the Winner of the Circular Game

var findTheWinner = function(n, k) {
	var arr=[]
	for(var i=1; i<=n; i++){
		arr.push(i)	
	}
	var count=0
	while(true){
		if(arr.length==1){
			break
		}
	for(var p=0; p<arr.length; p++){
		count++
		if(count<k){
			arr.push(arr.shift())
			break
		}else if(count==k){
			arr.shift()
			count=0
			break
		}
	}
	}
	return arr[0]
}
var n = 6
var k = 5
console.log(findTheWinner(n,k))
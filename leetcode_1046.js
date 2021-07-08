//1046. Last Stone Weight

function lastStoneWeight(stones) {
	var list = stones.length-1
	for(var c=0; c<list; c++) {
	var max1 = 0
	var largestindex = 0 
	for(var i=0; i<stones.length; i++) {
		if(stones[i]>max1){
			max1 = stones[i]
			largestindex = i
		}
	}
	var max2 = 0
	var largestindex_2 = 0
	for(var p =0; p<stones.length; p++) {
		if(p!=largestindex && stones[p]>max2){
				max2 = stones[p]
				largestindex_2 = p
		}
	}
	var sub = max1 - max2
	stones[largestindex]=sub
	const index2 = stones.indexOf(max2);
	stones.splice(index2, 1);
}
return stones
}
var arr =[2,7,4,1,8,1]
console.log(lastStoneWeight(arr))
//575. Distribute Candies

var distributeCandies = function(candyType) {
	var arr=[]
	var uniqNumArr = ([...new Set(candyType)])
	var maxNumOfCandies = (candyType.length/2)
	if(uniqNumArr.length==maxNumOfCandies){
		return maxNumOfCandies
	}
	else if(uniqNumArr.length<maxNumOfCandies){
		return uniqNumArr.length
	}else{
		for(var i=0; i<maxNumOfCandies; i++){
			arr.push(uniqNumArr[i])
		}
		return arr.length
	}
}

var candyType = [6,6,6,6]
console.log(distributeCandies(candyType))
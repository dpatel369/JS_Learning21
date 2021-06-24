//Kids with the greatest number of candies
//1431

var kidsWithCandies = function(candies, extraCandies) {
    boolean= []
    var y = 0
    for(i=0;i<candies.length;i++){
    	if(candies[i]>y){
    		y = candies[i]
    	}
    }
    for(j=0;j<candies.length;j++){
    	x = candies[j]+extraCandies
    	if(x >= y){
    		true
    	boolean.push(true)
    	}
    	else{
    		false
    	boolean.push(false)
    	}
    }
    return boolean  
}
candies = [2,3,5,1,3]
console.log(kidsWithCandies(candies, 3))
//1475. Final Prices With a Special Discount in a Shop

var finalPrices = function(prices) {
	for(var i=0; i<prices.length; i++){
		for(j=i+1;j<prices.length;j++){
			if(prices[j]<=prices[i]){
				prices[i] = prices[i]-prices[j]
				break
			}
		}
	}
		return prices
}

var prices = [8,4,6,2,3]
console.log(finalPrices(prices))
//739. Daily Temperatures

var dailyTemperatures = function(temperatures) {
	var maxNum = Math.max(...temperatures)
	for(var i=0; i<temperatures.length; i++){
		var count = 0
		for(var p=i+1; p<temperatures.length; p++){
			if(temperatures[i]<temperatures[p]){
				count++
				temperatures[i] = (p-i)
				break
			}else if(temperatures[i]==maxNum){
				temperatures[i]=0
				break
			}
		}
		if(i==temperatures.length-1){
				temperatures[i]=0
		}else if(count==0){
			temperatures[i]=0
		}
	}
	return temperatures
}

var temperatures = [34,80,80,34,34,80,80,80,80,34]
console.log(dailyTemperatures(temperatures))

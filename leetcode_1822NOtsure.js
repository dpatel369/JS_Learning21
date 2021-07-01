// function threeConsecutiveOdds(arr) {
// 	var list = []
// 	for(i=0; i<arr.length; i++){
// 		if(arr[i]%2){
// 			list.push(true)
// 		}
// 		else{
// 			list.push(false)
// 		}
// 	}
// 	for(j=0;j<list.length;j++){
// 		for(k=0; k<list.length; k+3){
// 			if(list[k]==true && list[k+1]==true && list[k+2]==true){
// 				return true
// 			}
// 			else{
// 				return false
// 			}
// 		}
// 	}
// }

function threeConsecutiveOdds(arr) {
	var count = 0 
	for(i=0; i<arr.length; i++){
		if(arr[i]%2 ){
			count++
		}
		else{
			count = 0
		}
		if(count == 3){
			return true
		}
	}
	return false
}

var arr = [1,2,34,3,4,6,5,7,2,23,12,1,3,5] 
console.log(threeConsecutiveOdds(arr))
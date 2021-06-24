//LeetCode two SUM

function twoSum(arr, target){
	for(i=0; i<arr.length; i++){
		var m = (target-arr[i])
		for(p=i+1; p<arr.length; p++){
			if(arr[p]==m){
				return [i , p] 
			}
		}
	}
	}
arr = [2,7,11,15]
console.log(twoSum(arr,26))

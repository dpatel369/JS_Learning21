// Bubble sort

var list = [15,25,0,36,5,8,90]

function bubbleSort(input1) {
	for(i=0; i<input1.length; i++){
		for(j=i+1; j<input1.length; j++){
			if(input1[i]>input1[j]){
				x = input1[j]
				input1[j] = input1[i]
				input1[i] = x
			}
		}
	}
	return input1
}

console.log(bubbleSort(list))
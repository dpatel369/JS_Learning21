// Bubble sort //SELECTION SORT

var list = [15,25,0,36,5,8,90]

function bubbleSort(input1) {
	for(i=0; i<input1.length; i++){
		console.log("i", i)
		console.log("input1", input1)
		for(j=i+1; j<input1.length; j++){
			console.log("	j", j)
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
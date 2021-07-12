//Selection sort 

function selectionSort(givenarr) {
	for(i=0; i<givenarr.length; i++){
		console.log("i", i)
		console.log("givenarr", givenarr)
		for(j=i+1; j<givenarr.length; j++){
			console.log("	j", j)
			if(givenarr[i]>givenarr[j]){
				x = givenarr[j]
				givenarr[j] = givenarr[i]
				givenarr[i] = x
			}
		}
	}
	return givenarr
}
var arr = [15,25,0,36,5,8,90,-3]
console.log(selectionSort(arr))
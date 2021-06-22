//find the strike ratesssss

var run = [100,90,80,70,60,50,40,30,20,10,0]
var ball = [60,61,62,63,64,65,66,67,68,69,70]

var strikerate = []

for(i=0; i<run.length; i++){
	sr = (run[i]/ball[i])
	avg = (sr*100)
	strikerate.push(avg)
}
console.log(strikerate)

/*Given a non-negative int n, return the count of the occurrences
of 7 as a digit, so for example 717 yields 2. (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).*/


count7(717) → 2
count7(7) → 1
count7(123) → 0

function countN(num) {
	var count = 0
	console.log("count", count)
	console.log("	num", num)
	if(num==0){
		return 0
	}
	if(num%10==7){
		count++
	}
	return count + countN(Math.trunc(num/10))
}
console.log(countN(5))
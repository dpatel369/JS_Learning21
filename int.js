// function add(a,b) {
// 	if(a>3 || b>3){
// 		console.log("valid number")
// 	}else{
// 		console.log("Not valid")
// 	}
// }

// var a =1
// var b =2
// console.log(add(a,b))

function selectionSort(nums) {
	for(var i=0; i<nums.length; i++){
		for(var p=i+1; p<nums.length; p++){
			if(nums[i]>nums[p]){
				var x = nums[p]
				nums[p] = nums[i]
				nums[i] = x
			}
		}
	}
	return nums
}
var nums = [3,6,1,2,0]
console.log(selectionSort(nums))


function insertionSort(nums) {
	for(var i=1; i<nums.length; i++){
		for(var p=i ; p>0; p--){
			if(nums[p]<nums[p-1]){
				x = nums[p]
				nums[p] = nums[p-1]
				nums[p-1] = x
			}else{
				break
			}
		}
	}
	return nums
}
console.log(insertionSort(nums))


function fib(n){
	var arr = []
	arr.push(0)
	arr.push(1)
	for(i=2; i<n; i++){
		x=arr[i-2]+arr[i-1]
		arr.push(x)
	}
	return arr
}
var n=5
console.log(fib(n))

function chess(f,r) {
	this.tile = f
	this.row = r
}

var a = new chess("a",1)

console.log(a)

let player = {
	"NAME" : "DHONI",
	from: "INDIA",
	team: "CSK"
}

console.log(Object.keys(player))
console.log(Object.values(player))
console.log(player)
console.log(player.from)


function arrSUm(inp){
	var sum=0
	for(var i=0; i<inp.length; i++){
		if(inp[i]%2==0){
			console.log(inp[i])
		}
		if(inp[i]==5){
			return i
		}
	}
}
var arr = [1,2,3,5]
console.log(arrSUm(arr))

for(var i=0; i<10; i++){
	if(i%2==0){
		console.log(i)
	}
}


function rec(a) {
	if(a==21){
		return;
	}
	console.log(a)
	return rec(a+1);
}
var a=10
console.log(rec(a))


console.log("DAS NA DAS")
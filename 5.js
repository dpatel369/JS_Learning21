//Swami Shreeji
//1
// arr=[10,20,30,40,50]
// console.log(arr)

//2
// arr=[10,20,30,40,50]
// console.log(arr)
// arr[5]=60
// console.log(arr)




//3 print single element of the array
// a=[10,20,30,40,50]
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])

// for(i=1; i<11; i++){					//print (1-10)
// 	console.log(i)
// }


// for(i=0; i<a.length; i++){             //
// 	console.log(a[i])
// }

// var b = []							 					//copy the array value of a into new array b
// for(i=0; i<a.length; i++){
// 	b[i] = a[i]												//assign value to b[i]
// }
// console.log(b)

							  								//index postion using function
// var p = ["Dhoni", "Kohli", "Sharma", "Chahal", "Steve"]  	//index postion of chahal
// for(i=0; i<p.length; i++){
// 	if(p[i]=="Dhoni"){
// 		console.log(i)
// 	}
// }


// function findIndex(arr, name) {  							//index value of given input  						
// 	for(i=0; i<arr.length; i++){
// 		if(arr[i]== name){
// 			return i
// 		}
// 	}
// }
// var players = ["Dhoni", "Kohli", "Raina", "Bhuvi", "KL", "Jaybhai", "Meetbhai"]
// var output = findIndex(players, "Jaybhai")
// console.log(output)


//Sum of all the even numbers in a array
//a = [5,7,2,4,6,11,13,20]

// function sumEven(arrlist) {
// 	var sum = 0
// 	for(i=0; i<arrlist.length; i++){
// 		if(arrlist[i]%2==0){
// 			sum = (arrlist[i]+sum)
// 		}
// 	}
// 	return sum
// }
// var numlist = [5,7,2,4,6,11,13,20]
// var outSum = sumEven(numlist)
// console.log(outSum)


//reverse the array
//a = [1,2,3,4,5,6,7,8,9,10]

// var arrlist = [1,2,3,4,5,6,7,8,9,10]
// var revarrlist = []
// for(i=arrlist.length; i>0; i--){
// 	console.log(arrlist)
// }

// for(i=10;i>0;i--){
// 	console.log(i)
// }

// var arrlist = [1,2,3,4,5]
// var revarrlist = []
// for(i=0; i<arrlist.length; i++){
// 	// p = (arrlist.length-1-i)
// 	revarrlist[arrlist.length-1-i]=arrlist[i]
// }
// console.log(revarrlist)


// var arrlist = [1,2,3,4,5]
// console.log(arrlist)
// // for(i=arrlist.length-1; i>=0; i--){
// // 	console.log(arrlist[i])
// // }
// var x = arrlist.push(50)
// console.log(arrlist)
// var y = arrlist.pop()
// console.log(arrlist)
// console.log("-------")
// console.log(x, y)



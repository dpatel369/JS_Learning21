//How to store player or persons inforamtion without knowing about Objects

var playing11 = ["kohli", "RS", "Gill", "Pujara","Rahane","Pant", "Jadeja", "Ashwin", "Shami", "Bumrah", "Ishant"]
var age = [31,30,23,34,32,23,29,34,33,28,30]
var height = [5, 6, 5, 6, 5, 7, 5 , 6,5 ,6 ,5]
var runs = [7000, 100, 200, 300, 400, 500, 600 , 700 , 800, 900, 950]
var wickets = [1,2,3,4,5,6,7,8,9,10,11]
console.log(playing11, age, height, runs, wickets)

/*Learned - How to use array to store inforamtion of players details*/


//Intro to OBJECT

let player_1={name:"Rohit",						//use let to start declaring the object(Player_1 is handler)
			age:31,							    // everthing inside the handle is known as object with different properties and value
			height:5,
			runs:3000,
			wickets:10}
console.log(player_1.runs)						//Use handler/object name with (.) and property name to print it's value

let player_2={name:"Kohli",
			age:30,
			height:5,
			runs:5000,
			wickets:8}
console.log(player_2.name)

/* Learned - Object makes it easier for user to store details in a proper way where it makes easy
for to access/update the inforamtions.*/
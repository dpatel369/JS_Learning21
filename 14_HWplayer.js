// function player(name) {
// 	function runs(odi, t20) {
// 		console.log(name, (odi + t20))
// 	}
// 	return runs
// }
// let a = player("Kohli"); 
// a(2000,3000)


function player(name) {
	var runs = 0;
	var balls = 0;
	var avgs = 0;
	var Batting = "";
	var Role = "";

	function avg(in1, in2) {
		runs += in1
		balls += in2
	}
	
	function type(input1, input2) {
		Batting = input1
		Role = input2
	}


	function info() {
		console.log("Name:"+name,"Runs:"+runs, "Balls:"+balls, "Batting:"+Batting, "Role:"+Role)
	}
	return{
		info:info,
		avg: avg,
		type: type,
	}
}

var Dhoni = player("MSD")
Dhoni.avg(150, 170)
Dhoni.type("Right Hand", "Captain")
Dhoni.avg(30,20)
Dhoni.info();


var Kohli = player("Kohli")
Kohli.info();
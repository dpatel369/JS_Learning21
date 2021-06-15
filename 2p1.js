// "Swami Shreeji"
// Hollow Square Star Pattern with Diagnoal
//*****
//** **
//* * *
//** **
//*****

for(var i=0;i<5;i++){
	if(i==0||i==4){
	for(var p=0;p<5;p++){
	process.stdout.write("*")
}
}
	else if(i==1||i==3){
		for(var s=0;s<2;s++){
			process.stdout.write("*")
		}
		process.stdout.write(" ")
		for(var s=0;s<2;s++){
			process.stdout.write("*")
		}
	}
	else{
		for(var h=0;h<3;h++){
			process.stdout.write("*")
			process.stdout.write(" ")
		}
	}
process.stdout.write('\n')
}


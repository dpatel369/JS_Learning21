//"Swami Shreeji"
//Diamond Star Pattern
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

for(var g=0;g<10;g++){
	if(g%2){
			var p = (9-g)/2
			for(var c=0; c<p;c++){
				process.stdout.write(" ")
			}
	for(var m=0;m<g;m++){
		process.stdout.write("*")
	}
}
	process.stdout.write("\n")
}

for(var n=8;n>0;n--){
	if(n%2){
			var r = (9-n)/2
			for(var z=0; z<r;z++){
				process.stdout.write(" ")
			}
	for(var m=0;m<n;m++){
		process.stdout.write("*")
	}
}
	process.stdout.write("\n")
}
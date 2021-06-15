for(var d=7;d>0;d--){
	if(d%2){
		if(d<7){
			var a = (7-d)/2
		for(var m=0;m<a;m++)
			process.stdout.write(" ")
		}
	for(var s=0;s<d;s++){
		process.stdout.write("*")
	}
	process.stdout.write("\n")
	}
}

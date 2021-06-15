for(var p=0;p<5;p++){
	for(var s=0;s<p;s++){
		process.stdout.write(" ")
	}
	for(var g=p;g<5;g++){
		process.stdout.write("*")
	}
	process.stdout.write("\n")
}
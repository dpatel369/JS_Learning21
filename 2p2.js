// "Swami Shreeji"
// "Hollow Rhombus Star Pattern"
//     *****
//    *   *
//   *   *
//  *   *
// *****

for(var p=0;p<5;p++){
	for(d=p+1;d<5;d++){
		process.stdout.write(" ")
		}
	if(p==0||p==4){
		for(d=0;d<5;d++){
		process.stdout.write("*")
	}
}
	else{
		for(m=0;m<1;m++){
			process.stdout.write("*")
		}
		for(m=1;m<4;m++){
			process.stdout.write(" ")
		}
		for(m=5;m<6;m++){
			process.stdout.write("*")
		}
	}
	process.stdout.write("\n")
}
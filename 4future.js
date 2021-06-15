function hello_generator(){
	var h = function(){
		console.log("Hello World")
		return 6
	}
	return h
	}
	var b = hello_generator()
	console.log(b)
	// b()
//function is just a value 

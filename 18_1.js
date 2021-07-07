//1
setTimeout(function() {
	console.log("Hello World");
}, 3000)


setTimeout(function() {
	console.log("------------------------------------------------------");
}, 3000)


//2
for(var i =0; i<5; i++) {
	
	setTimeout(function() {
		console.log(i);
	}, 3000);
}


setTimeout(function() {
	console.log("------------------------------------------------------");
}, 3000)


//3
for(let p =0; p<5; p++) {
	setTimeout(function() {
		console.log(p);
	}, 3000);
}
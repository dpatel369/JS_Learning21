function player(name) {
	function runs(odi, t20) {
		console.log(name, (odi + t20))
	}
	return runs
}
let a = player("Kohli");
a(2000,3000)
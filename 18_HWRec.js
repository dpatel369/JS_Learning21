//string.startsWith
//string.slice
/*Given a string, compute recursively (no loops) a new string where
 all appearances of "pi" have been replaced by "3.14".
changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p" */

function valOfPi(input) {
	var string = input
	console.log("string.substring(1)", string.substring(1))
	if(string.length==0){
		return string
	}
	if(string.charAt(0)=="p" && string.charAt(1)=="i"){
		return "3.14" + valOfPi(string.substring(2), string);
	}
	return string.charAt(0) + valOfPi(string.substring(1))
}

console.log(valOfPi("abpi"))
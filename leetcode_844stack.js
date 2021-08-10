//844. Backspace String Compare

var backspaceCompare = function(s, t) {
	var s1 = []
	for(var i=0; i<s.length; i++) {
		if(s[i] != "#") {
			s1.push(s[i])
		}else{
			s1.pop()
		}
	}
	var t1 = []
	for(var p=0; p<t.length; p++) {
		if(t[p] != "#") {
			t1.push(t[p])
		}else{
			t1.pop()
		}
	}
	return (s1.join("")==t1.join("")) ?true:false
}

var s = "ab##"
var t = "c#d#"
console.log(backspaceCompare(s,t))
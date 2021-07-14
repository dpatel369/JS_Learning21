// 21. Merge Two Sorted Lists

var mergeTwoLists = function(l1, l2) {
	var list = []
	var i =0
	var p =0
	for(;i<l1.length&& p<l2.length;) {
		if(l1[i]<l2[p]) {
			list.push(l1[i])
			i++
		}else{
			list.push(l2[p])
			p++
		}
	}
	if(i<l1.length){
		for(var k=i; k<l1.length; k++){
			list.push(l1[k])
		}
	}
	if(p<l2.length){
		for(var k=p; k<l2.length; k++){
			list.push(l2[k])
		}
	}
	return list
}
var l1 = []
var l2 = [0]
 console.log(mergeTwoLists(l1, l2))


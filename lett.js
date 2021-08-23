// 145. Binary Tree Postorder Traversal

var postorderTraversal = function(root) {
	var result = []
	for(var i=root.length; i>0; i--){
		if(root[root.length-1] != null){
			result.push(root[root.length-1])
			root.pop()
		}else{
			root.pop()
		}
	}
	return result
}

var root  = [1,null,2,3]
console.log(postorderTraversal(root))
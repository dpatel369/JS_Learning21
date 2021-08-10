//1662. Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function(word1, word2) {
	var word1 = word1.join('')
	var word2 = word2.join('')
	return word1 == word2 ? true : false
	// var word = ""
	// for(var i=0; i<word1.length; i++) {
	// 	word += word1[i]
	// }
	// return word
}

var word1 = ["abc","d", "defg"]
var word2 = ["abcddefg"]
console.log(arrayStringsAreEqual(word1, word2))
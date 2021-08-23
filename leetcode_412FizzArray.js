//412. Fizz Buzz

function fizzBuzz(n) {
	var answer=[]
	for(var i=1; i<=n; i++){
		if(i%3==0 && i%5==0){
			answer[i-1] = "FizzBuzz";
		}else if(i%3==0){
			answer[i-1] = "Fizz";
		}else if(i%5==0){
			answer[i-1] = "Buzz";
		}else answer[i-1] = i.toString()
	}
	return answer
}

var n = 3
console.log(fizzBuzz(n))
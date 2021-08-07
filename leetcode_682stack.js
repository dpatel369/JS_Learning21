//682. Baseball Gameg

var calPoints = function(ops) {
    var list = []
    for(var i=0; i<ops.length; i++) {
        if(ops[i] != "C" && ops[i] != "D" && ops[i] != "+") {
            list.push(parseInt(ops[i]))
        }else if(ops[i] == "C"){
            list.pop()
        }else if(ops[i] == "D") {
            var a = (2*(list[list.length-1]))
            list.push(a)
        }else if(ops[i] == "+") {
            list.push((list[list.length-1]+(list[list.length-2])))
        }
    }
    var sum = 0
    for(var i=0; i<list.length; i++) {
        sum += parseInt(list[i])
    }
    return sum  

    // return list.reduce((curr, prev) => curr + prev)  //return without for loop
};

var ops = ["5","-2","4","C","D","9","+","+"]
console.log(calPoints(ops))

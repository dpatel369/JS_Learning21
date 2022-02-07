//155 Min Stack

var input = [[], [-2], [0], [-3], [], [], [], []]

var MinStack = function() {
    this.min = []
    this.stack = []
};

MinStack.prototype.push = function(val) {
   stack.push(val)
};

MinStack.prototype.pop = function() {
    stack.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};


MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};
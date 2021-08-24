function Queue() {
   this.elements = [];
}

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.enqueue = function (e) {
   this.elements.push(e);
};

let q = new Queue();

for (let i = 5; i <= 7; i++) {
    q.enqueue(i);
}

console.log(q.peek());

// function que(n) {
// 	n.shift()
// 	n.push(1)
// 	console.log(n)
// }

// var arr = [1,2,3,4]
// console.log(que(arr))
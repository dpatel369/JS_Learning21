//Stacks are data structures that follow the Last-In-First-Out (LIFO) principle,
//Meaning the last item inserted into a stack is the first one to be deleted
//In other words, a stack is a list of elements that are accessible only from one end of the list, which is called the Top of Stack (ToS)

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
   this.data[this.top] = element;
   this.top = this.top + 1;
   console.log(this.data)
}
   length() {
   console.log(this.top)
}
    peek() {
        console.log(this.data[this.top-1])
    }
}
var n = new Stack()
n.push(10)
n.push(100)
n.length()
n.peek()
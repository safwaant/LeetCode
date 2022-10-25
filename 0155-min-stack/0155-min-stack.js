
class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }
    
    push(x) {
        if (!this.min.length) {
            this.min.push(x);
        } else {
            this.min.push(Math.min(x, this.getMin()));
        }
        this.stack.push(x);
    }
    
    pop() {
        this.min.pop()
        return this.stack.pop()
    }
    
    top() {
        return this.stack[this.stack.length-1];
    }
    
    getMin() {
        return this.min[this.min.length-1];
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
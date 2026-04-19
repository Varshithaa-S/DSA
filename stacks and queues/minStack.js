
var MinStack = function() {
    this.s = [];
    //  this.min;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(!this.s.length) {
        // this.min = val;
        this.s.push([val,val]);
    }
    else {
        // if(val<this.min) {
        //     this.min = val
        // }
        let min = Math.min(val,this.s[this.s.length-1][1])
        this.s.push([val,min]);
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // if(this.s.length>=2)this.min = this.s[this.s.length-2][1]
    return this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
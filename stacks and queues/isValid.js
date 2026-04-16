/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let stack = [];
    // let j=0
    // stack[0] = s[0]
    // for(let i=1;i<s.length;i++) {
    //     if( (s[i]== ")" && stack[j] == "(") || (s[i]== "}" && stack[j] == "{") || (s[i]== "]" && stack[j] == "[")) {
    //         stack.pop();
    //         j--
    //     } else {
    //         stack.push(s[i])
    //         j++
    //     }
    // }
    // return !stack.length;
    let stack = []
    let map = {//O(1) space
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i=0;i<s.length;i++) {//O(n) time
        if(map[s[i]]) {
            if(stack.pop()!==map[s[i]]) return false
        } else {
            stack.push(s[i])
        }
    }
    return !stack.length;

};
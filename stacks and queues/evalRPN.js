/**
 * @param {string[]} tokens
 * @return {number}
 */
//  tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/'
var evalRPN = function(tokens) {
    
    let stack  = [];

    let res=0
    for(let i=0;i<tokens.length; i++) {
        
        if (!['+','-','/','*'].includes(tokens[i])) {            
            let num = Number(tokens[i])
            stack.push(num)
        } else {
            s = stack.pop();
            f = stack.pop();
            if(tokens[i] == "+") {
                res = s+f;
            } else if (tokens[i] == "-") {
                res = f-s;
            } else if (tokens[i] == "*") {
                res = f*s;

            } else {
                res = Math.trunc(f/s)
            }
            stack.push(res)
        }
    }
    return stack.pop()
};



// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// //  tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/'
// var evalRPN = function(tokens) {
    
//     let stack  = [];
//     let map = {
//         "+" : (a, b)=>(b+a),
//         "-" : (a,b) => (b-a),
//         "/" : (a,b) => (Math.trunc(b/a)),
//         "*" : (a,b) => (a*b)
//     }
//     for(let i=0;i<tokens.length; i++) {
        
//         if (!map[tokens[i]]) {            
//             stack.push(Number(tokens[i]))
//         } else {
//             s = stack.pop();
//             f = stack.pop();
//             let res = map[tokens[i]](+s, +f)
//             stack.push(res)
//         }
//     }
//     return stack.pop()
// };
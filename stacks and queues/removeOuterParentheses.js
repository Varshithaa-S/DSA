
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = ""
    let stack = [];
    for (let i=0; i< s.length; i++) { 
        if (s[i] == '(') {
            stack.push(s[i]) 
        let len = stack.length;

            if(len>1) {
                res = res + s[i]
            }
            console.log("len",len," res",res)
        } else {
                    let len = stack.length;

            if(len >1 ) res = res + s[i]
            stack.pop();
        } 

    }
    return res;
};

console.log("res=>",removeOuterParentheses("(()())(())(()(()))"))                               
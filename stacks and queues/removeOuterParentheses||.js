var removeOuterParentheses = function(s) {
       let res = ""
    let level = -1;
    for (let i=0; i< s.length; i++) { 
        if (s[i] == '(') {
            level++ 
            res += level? s[i] : "";
        } else {
            res += level? s[i] : "";
            level--;
        } 

    }

    return res;
};
/**
 * @param {string}
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp = 0;
    let c =0;
    for(let i=0;i<s.length;i++) {
        if(s[i] == 'R') temp++;
        else temp--;
        if(!temp) c++
    }
    return c;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // s = s.trim();
    // let arr = s.split(" ");
    // return arr[arr.length-1].length

    let n = s.length-1;
    // while(n>=0) {
    //     if(s[n] != " ") break;
    //     --n;
    // }
    // let c=0;
    // while(n>=0) {
    //     if(s[n] == " ") break;
    //     c++;
    //     n--;

    // }
    // return c;
    let c=0
    while(n>=0) {
        if(c>0 && s[n] == " ") break
        if(s[n]!==" ") c++
        n--;
        
    }
    return c
};
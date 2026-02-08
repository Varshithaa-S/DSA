/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let x = s.length-1;
    for(let i=0;i<s.length/2;i++) {
        let vessel = s[x-i];
        s[x-i] = s[i]
        s[i] = vessel;
    }

    // let len = s.length;
    // let halfLen = Math.floor(len/2);
    // for(let i=0;i<halfLen;i++) {
    //     let temp = s[len-1-i];
    //     s[len-1-i] = s[i];
    //     s[i] = temp
    // }

    // return s;
};
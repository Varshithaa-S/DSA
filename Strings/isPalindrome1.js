/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    let filterString = '';
    let rev = ''
    for(let i=0;i<s.length;i++) { 
        if(s[i].match(/[a-z0-9]/i)) { //s[i].charCodeAt() returns ASCII
            filterString += s[i];
            rev = s[i] + rev;
        }
        // if (s[s.length-1-i].match(/[a-z0-9]/i)) rev += s[s.length-1-i]
    }
    // let reverseString = filterString.split("").reverse().join("");
    return rev === filterString;
};
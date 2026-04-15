/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj={}
    for(let i=0;i<s.length;i++) {
        obj[s[i]] = !obj[s[i]]? 1 : ++obj[s[i]]
    }
    let max =0 ;
    let max2 = 0
    for(let k in obj) {
        if(obj[k]>max && ["a","e","i","o","u"].includes(k)) {
            max= obj[k]
        }
        else if(obj[k]>max2 && !["a","e","i","o","u"].includes(k)) {
            max2= obj[k]
        }

    }
    return max + max2
};
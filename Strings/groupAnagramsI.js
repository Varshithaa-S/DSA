/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(let i=0;i<strs.length;i++) {
        let sortedArray = strs[i].split("").sort().join("");

        if(!map[sortedArray]) map[sortedArray] = [strs[i]];
        else map[sortedArray].push(strs[i])
    }
    return [...Object.values(map)]
};
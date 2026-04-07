/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = [];
    for(let i=0;i<words.length;i++){
        // if (words[i].has(x)) arr.push[i]
        let n=words[i].length-1
        while(n>=0) {
            // console.log("words[i][n] ===",words[i][n])
            if (words[i][n] ==  x) { //includes
                arr.push(i);
                // console.log("arr===",arr)

                break
            }
            n--;
        }
    }
    return arr
    
};
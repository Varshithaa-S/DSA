/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let c=0;
    // for(let i=0;i<jewels.length;i++) {
    //     for(let j=0;j<stones.length;j++) {
    //         if(jewels[i] === stones[j]) {
    //             c++;
    //         }
    //     }
    // }
      
    //set /space complexity is 0(1) because only it can accomodate english letters small and bit i.e 52

    let s = new Set();
    for(let i=0; i<jewels.length; i++) {
        s.add(jewels[i]);
    }
    for(let i=0; i<stones.length; i++) {
        if(s.has(stones[i])) c++
    }


    return c
};
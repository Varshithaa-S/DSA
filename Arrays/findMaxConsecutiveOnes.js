/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let returnMax=0;
    for (let i=0;i<nums.length;i++) {
    if (nums[i] == 1) {
        max++
    } else if(nums[i]==0 ) {
        returnMax = Math.max(max,returnMax)
        max=0;
    }
}
return Math.max(max,returnMax)
    
};
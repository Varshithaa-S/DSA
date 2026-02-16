/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let sum = 0
    for(let i=0;i<nums.length;i++) {
        sum+=nums[i]
    }
    let sum2 =( n*(n+1))/2  //sum of first n [0,n]
    return sum2-sum;
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let hash = {};
    // for (let i=0;i<nums.length;i++) {
    //     if (!hash[nums[i]]) {
    //         hash[nums[i]] = 1
    //     } else {
    //         hash[nums[i]]++;
    //     }
    // }
    // }
    // for (let key in hash) {
    //     if (hash[key] == 1) return Number(key)
    // }
        // for (let i=0;i<nums.length;i++) { 
        //     if (hash[nums[i]] == 1) {
        //         return nums[i]
        //     }
        // }
// -------------------------IMP-------------------------------------
        // a XOR(^) 0 = a
        // a XOR a = 0       whenever it is about duplicates we can use XOR
        let xor = 0;
        for (let i=0;i<nums.length;i++) {
            xor =xor^nums[i];

        }
        return xor
};
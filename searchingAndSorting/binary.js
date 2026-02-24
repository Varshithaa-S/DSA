/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    // let isGot = false
    
        let middle;
    while (r>=l) {
        middle = Math.floor((l+r)/2);
        if (nums[middle] == target) {
            // isGot = true
            return middle;
        } else if (nums[middle]<target) {
            l = middle +1;
        } else if (nums[middle]>target) {
            r = middle -1;
        }

    }
    return -1
};

//space ; O(3) -> O(1);
//time -> (log n)
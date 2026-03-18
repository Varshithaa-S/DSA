/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
        if (nums.length <= 1) return nums;
    let middle = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));
    return merge(left, right);

};
function merge(left, right) {
    let res = [];
    let i=0,j=0;
    while(i< left.length && j<right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.splice(j)]
}

console.log("sorted : ",sortArray([4,1,9,4,6,2,8,2,55,32]))
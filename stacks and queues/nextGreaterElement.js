/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let stack = [];
    let map = {}
    map[nums2[nums2.length-1]] = -1;
    stack.push(nums2[nums2.length-1])


    for(let i=nums2.length-2; i>=0; i--) {
        while(stack.length) {
            if(stack[stack.length-1] <  nums2[i]) {
                stack.pop()
            } else {
                map[nums2[i]] = stack[stack.length-1]
                break;
            }
        }
        if(stack.length == 0) map[nums2[i]] = -1
        stack.push(nums2[i])

    }
    return nums1.map(x=> map[x])

};
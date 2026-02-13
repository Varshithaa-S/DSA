/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // for(let i=1;i<nums.length;i++) {
    //     if(nums[i-1] == 0) {
    //         for(j=1;j<nums.length;j++) {
    //             console.log("nums inisde 1",nums, "i=",i," nums[j-1]",nums[j-1]," nums[j]",nums[j])
    //             // if (nums[j] == 0){
    //             //     break
    //             // }
    //             nums[j-1] = nums[j]
    //             console.log("nums inisde",nums)
    //         }
    //         nums[nums.length -i] = 0
    //     }
    // }
    // console.log(nums)
     

    let x=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]!==0) {
            nums[x] = nums[i]
            x++;
        }
    }
    for(let i=x;i<nums.length;i++) {
        nums[i]=0;
    }
    console.log(nums)


};
moveZeroes([0,0,1])


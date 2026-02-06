let arr = [2,6,9,3,10,3,7];
let target = 19;
console.log(twoSum(arr,target))


function twoSum (arr, target) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] == target) {
            return [i,j];
            } else {
                continue;
            }
            
        }
    }
    return [-1,-1];
}


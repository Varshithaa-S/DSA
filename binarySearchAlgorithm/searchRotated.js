/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l=0;
    let r=arr.length-1;

    while(l<=r) {
        let mid = l+ Math.floor((r-l)/2);
        if (arr[mid] == target) return mid

        if(arr[l] <= arr[mid]) {
            if(target>=arr[l] && target< arr[mid]) {
                r = mid-1
            } else {
                l = mid+1
            }
        }else {
            if(target > arr[mid] && target <= arr[r]) {
                l = mid+1;
            } else {
                r = mid-1
            }
        }
    }
     
    return -1


};
const arr = [-5, 2, 6, 10, 15, 28, 33,35]; // Binary search algo

const target = 15;
// 0   6-      20
function _search(arr, target, left, right) {
    if (left > right) return -1;


    const mid = parseInt((left + right +1) / 2);  //3
    // const mid = left + parseInt((right - left ) / 2);
    console.log("mid :", mid);
    
    if (arr[mid] == target) return mid;
    else if (target < arr[mid]) {
      return _search(arr, target, left, mid-1);
    } else if (target > arr[mid]) {
      return _search(arr, target, mid+1, right);
    } else {
        return -1
    }
}


console.log(_search(arr, target, 0, arr.length - 1));
let arr =[5,3,7,2,8]
function sumOfN(n) {
    if (n == 0) return arr[0];
    return arr[n] + sumOfN(n-1)
}
console.log(sumOfN(arr.length-1))
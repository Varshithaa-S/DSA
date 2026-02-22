let arr =[5,3,2,10,1]
// function sumOfN(n) {
//     if (n == 0) return arr[0];
//     return arr[n] + sumOfN(n-1)
// }
// console.log(sumOfN(arr.length-1))

console.log(sumOfNOdd(arr.length-1))

function sumOfNOdd(n) {
    if (n == 0) 
        if (arr[n]%2 !== 0) return arr[0];
        else return 0;
    

    if (arr[n]%2 !== 0) {
        return arr[n] + sumOfNOdd(n-1)
    } else {
        return sumOfNOdd(n-1)
    }
}

let arr = [25,7,9,3,21,10,23,17]
// let min = arr[0];
// let max = arr[0];
let maxProfit = 0;
// let maxVal,maxOld
for (let i=0; i < arr.length-1;i++) {
  for (let j= i+1; j<arr.length; j++) {
    if ((arr[j] - arr[i]) > maxProfit) {
        maxProfit = (arr[j] - arr[i]);
    }
  }
}
console.log(maxProfit)

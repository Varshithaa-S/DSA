/**
 * @param {number[]} prices
 * @return {number}
 */
// maxProfit([[7,1,5,3,6,4]])
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit=0;
    for (let i=1;i<prices.length;i++){
        if ((prices[i] - min) > maxProfit) {
            maxProfit = prices[i] - min
        }
        if(prices[i]<min) {
            min = prices[i]
        }
    }
    return maxProfit;
    
};


// var maxProfit = function(prices) {
//     let a = prices[0];
//     let b = 0;
//     let profit=0;
//     for (let i=1;i<prices.length;i++){
//         console.log("prices[i]",prices[i])
//         console.log("prices[i-1]",prices[i-1])
//         console.log("a",a)
//         console.log("b",b)
//         if(prices[i] < prices[i-1] &&  prices[i] < a && prices[i]!=prices[prices.length-1]) {
//             a = prices[i]
//             console.log("a Inside",a)

//         } else if(prices[i] > prices[i-1] &&  prices[i] > b){
//             b = prices[i];
//             console.log("b Inside",b)
//         }
//     }
//     return (b-a)>=0?b-a:0;
    
// };

// console.log(maxProfit([2,4,1]))
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = prices[0];
    let profit = 0;
    let length = prices.length;
    for(let i=1;i<length;i++){
        if(prices[i]<prices[i-1]){
            profit +=prices[i-1]-start;
            start= prices[i];
        }
    }
    profit = prices[length-1]>start? profit+prices[length-1]-start: profit;
    return (profit)
};
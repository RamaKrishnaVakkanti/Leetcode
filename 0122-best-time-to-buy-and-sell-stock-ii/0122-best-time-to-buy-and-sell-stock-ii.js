/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = prices[0];
    let profit = 0;
    
    for(let i=1;i<prices.length;i++){
        if(prices[i]<prices[i-1]){
            console.log(i, prices[i-1], start)
            profit +=prices[i-1]-start;
            start= prices[i];
        }
    }
    profit = prices.at(-1)>start? profit+prices.at(-1)-start: profit;
    return (profit)
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
   let small = prices[0];
    let profit=0;
    
    for(let i=1;i<prices.length;i++){
        if(prices[i] < small){
            small = prices[i];
        }else{
            profit = prices[i]-small>profit ? prices[i]-small: profit;
        }
    }
    return profit;
};
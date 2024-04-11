/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = Math.max(...candies);
    
    // candies.map((candy)=>{
    //     if(candy>largest) largest = candy;
    // })
    
    return candies.map((candy)=> candy+extraCandies >= largest);
    
    
    
};
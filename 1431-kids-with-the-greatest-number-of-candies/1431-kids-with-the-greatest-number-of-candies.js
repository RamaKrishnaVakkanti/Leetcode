/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = candies[0];
    
    candies.map((candy)=>{
        if(candy>largest) largest = candy;
    })
    
    const output = candies.map((candy)=> candy+extraCandies >= largest);
    
    return output;
    
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let temp=[...heights];
    temp.sort((a,b)=>a-b);
    let output=0;
    for(let i=0;i<temp.length;i++){
        if(temp[i]!==heights[i]) output++;
    }
    return output;
};
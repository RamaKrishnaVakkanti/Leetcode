/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let output =[];
    let current = nums[0]+"";
    
    for(let i=1;i<=nums.length;i++){
        if(nums[i] == nums[i-1]+1) continue;
        
        if(nums[i-1] == current) output.push(current);
        else{
            output.push(current+"->"+nums[i-1]);
        }
        current = nums[i]+"";
    }
    
    return output;
};
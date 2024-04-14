/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let start =0, zeroCount = 0;
    let maxOnes = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0) zeroCount++;
        
        while(zeroCount>k){
            if(nums[start] == 0) zeroCount--;
            start++;
        }
        maxOnes = maxOnes>i-start+1 ? maxOnes : i-start+1;
    }
    return maxOnes;
};
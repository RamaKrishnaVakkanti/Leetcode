/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let longest =0,start = 0,count =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]== 0) count++;
        while(count>1){
            if(nums[start]==0) count--;
            start++;
        }
        longest = longest>i-start?longest: i-start;
    }
    return longest;
};
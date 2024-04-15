/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let longest =0;
    let start = 0;
    let count =0;
    let zero=false;
    for(let i=0;i<nums.length;i++){
        if(nums[i]== 0){
            count++;
            zero = true;
        }
        while(count>1){
            if(nums[start]==0) count--;
            start++;
        }
        let length = i-start;
        
        // if(zero){
        //     length = length-1;
        // }
        longest = longest>length?longest: length;
        console.log(longest, start, count);
    }
    return longest;
};
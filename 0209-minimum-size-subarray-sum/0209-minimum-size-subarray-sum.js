/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // let sum = 0;
    // let start = 0;
    // let output = 0;
    // for(let i=0;i<nums.length;i++){
    //     sum = sum+nums[i];
    //     while(sum>=target){
    //         let temp = i-start+1;
    //         if(output == 0 || temp< output) output = temp;
    //         sum = sum - nums[start++];
    //     }

    // }
    // return output;


  
    
    let minArr = nums.length+1;
    let sum =0;
    let start = 0;
    
    for(let i=0;i<nums.length;i++){
        sum =sum+nums[i];
        
        while(sum>=target){
            if(minArr>(i+1-start)) minArr = i+1-start;
            sum = sum - nums[start++];
        }
    }
    return minArr> nums.length? 0 : minArr;
};
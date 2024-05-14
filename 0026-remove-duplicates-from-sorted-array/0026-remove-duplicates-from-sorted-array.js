/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let count = 1;
    if(nums.length<=1) return nums.length;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]) nums[count++] = nums[i];
    }
    
    return count;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//     let temp = [...new Set(nums)]; 

//     let count =0;
//     temp.forEach((value)=>{
//         nums[count++] = value;
//     });
//     return temp.length;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map= {};
    
    for(let i=0;i<nums.length;i++) map[nums[i]]=1;
    
    let i=1;
    
    while(map[i]){
        i++;
    }
    return i;
    // for(let i=1;i<=nums.length;i++){
    //     if(!map[i]) return i;
    // }
};
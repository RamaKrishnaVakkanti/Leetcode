/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let map={}; 
    for(let i=0;i<nums.length-1;i++){
        let sum=nums[i]+nums[i+1];
        if(map[sum]) return true;
        map[sum] = 1;
    }
    return false;
};
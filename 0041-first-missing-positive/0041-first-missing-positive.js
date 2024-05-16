/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map= {},i=1;
    for(let i=0;i<nums.length;i++) map[nums[i]]=1;    
    while(map[i]) i++;
    return i;
};
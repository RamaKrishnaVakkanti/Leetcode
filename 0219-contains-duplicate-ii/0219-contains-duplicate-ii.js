/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let indexMap = {};
    for(let i=0;i<nums.length;i++){
        if(i-indexMap[nums[i]]<=k){
            return true;
        }
        indexMap[nums[i]] = i;
    }
    return false;
};
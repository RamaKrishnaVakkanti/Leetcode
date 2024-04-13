/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = 0;
    
    let sum = 0;
    for(let i=0;i<k;i++){
        sum = sum+nums[i];
    }
    maxAvg = sum/k;
    let count=0;
    for(let i=k;i<nums.length;i++){
        sum = sum-nums[count++]+nums[i];
        let avg = sum/k;
        maxAvg = maxAvg<avg ? avg : maxAvg;
    }
    return maxAvg;
};
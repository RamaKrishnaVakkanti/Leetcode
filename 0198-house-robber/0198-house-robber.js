/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let previousOne = 0;
    let previousTwo = 0;

    for(let i=0;i<nums.length;i++){
        const skipCurrent = previousOne;
        const notSkipCurrent = previousTwo+nums[i];

        const maxAmount = skipCurrent>notSkipCurrent ? skipCurrent : notSkipCurrent;

        previousTwo = previousOne;
        previousOne = maxAmount;
    }
    return previousOne;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let length = nums.length;
    let leftArray = [], leftSum =0;
    let rightArray= [], rightSum=0;
    for(let i=0;i<length;i++){
        leftSum += nums[i];
        rightSum += nums[length-1-i];
        leftArray.push(leftSum);
        rightArray.unshift(rightSum);
    }
    
    for(let i=0;i<length;i++){
        if(leftArray[i] === rightArray[i]) return i;
    }
    return -1;
};
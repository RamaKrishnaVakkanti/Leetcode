/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let left = 0, right = nums.length-1;
    let output =0;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum == k){
            output++;
            left++;
            right--;
        }else if(sum <k){
            left++;
        }else{
            right--;
        }
    }
    return output;
};
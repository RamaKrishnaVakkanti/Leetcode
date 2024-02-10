/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    const output = [];

    for(let i=0;i<nums.length-2;i++){

        if(i>0 && nums[i] == nums[i-1]) continue;
        
        let start = i+1;
        let end = nums.length-1;

        while(start<end){
            if(nums[i]+nums[start]+nums[end] == 0){
                output.push([nums[i], nums[start], nums[end]]);

                while(start<end && nums[start] == nums[start+1]) start++;
                while(start<end && nums[end] == nums[end-1]) end--;

                start++;
                end--;
            }else if(nums[i]+nums[start]+nums[end]<0){
                start++;
            }else{
                end--;
            }
        }
    }
    return output;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const binarySearch = (nums, start, end)=>{
        if(start>end){
            if(nums[end]>target) return end;
            else
                return end+1;
        }
         let mid =Math.floor((start+end)/2);
        if(nums[mid] == target) return mid;
        
        if(nums[mid]>target) return binarySearch(nums, start, mid-1);
        return binarySearch(nums, mid+1, end);  
    }
    return binarySearch(nums, 0, nums.length-1);
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let length = nums.length;
    let count =0;
    
    for(let i=0;i<length;i++){
        if(nums[i]!==0){
            nums[count++] = nums[i];
        }
    }
    
    for(let i=count;i<length;i++){
        nums[i] = 0;
    }
    
    // for(let i=0;i<length;i++){
    //     if(nums[i] == 0) {
    //         console.log(i);
    //         nums.splice(i,1);
    //     };
    // }
    // console.log(nums);
    // let newLength = nums.length;
    // for(let i=newLength;i<length;i++){
    //     nums.push(0);
    // }
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
    
//     let product=1;
//     let Zeros= 0;
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0)  product *=nums[i];
//         else Zeros++;
//     }
    
//     if(Zeros>=2) return new Array(nums.length).fill(0);
//     let output=[];
//     for(let i=0;i<nums.length;i++){
//         if(Zeros){
//             if(nums[i]==0) output.push(product);
//             else output.push(0);
//         }else{
//             output.push(product/nums[i]);
//         }
//     }
//     return output;
// };

var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    // console.log(output, rightMult);
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    // console.log(output, leftMult);
    return output;
};
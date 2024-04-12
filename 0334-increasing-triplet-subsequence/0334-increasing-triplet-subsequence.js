/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = nums[0];
    let second = Infinity;
    
    for(let num of nums){
        if(num<=first){
            first = num;
        }else if(num<=second){
            second = num;
        }else{
            console.log(num);
            return true;
        }
    }
    return false;
};
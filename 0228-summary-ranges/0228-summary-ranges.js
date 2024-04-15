/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let output =[];
    let current = nums[0]+"";
    
    for(let i=1;i<=nums.length;i++){
        if(nums[i] == nums[i-1]+1) continue;
        
        if(nums[i-1] == current) output.push(current);
        else{
            output.push(current+"->"+nums[i-1]);
        }
        current = nums[i]+"";
    }
    
    return output;
    
   //  let start = '#';
   //  let recent = '#';
   //  let output = [];
   //  for(let i=0;i<nums.length;i++){
   //      if(start=='#'){
   //          start=nums[i];
   //          recent = nums[i];
   //      }else if(nums[i] == recent+1){
   //          recent = nums[i];
   //      }else{
   //          if(start == recent){
   //              output.push(start+"");
   //          }else{
   //              output.push(""+start+"->"+recent+"");
   //          }
   //          start=nums[i];
   //          recent = nums[i];
   //      }
   //  }
   // if(nums.length !==0){
   //      if(start == recent){
   //              output.push(start+"");
   //          }else{
   //              output.push(""+start+"->"+recent+"");
   //          }
   // }
   //  return output;
};
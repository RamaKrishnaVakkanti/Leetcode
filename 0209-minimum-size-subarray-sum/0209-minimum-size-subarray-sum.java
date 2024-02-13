class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        
        int len = nums.length+1;
        int start =0;
        int sum = 0;
        
        for(int i=0;i<nums.length;i++){
            sum = sum+nums[i];
            while(sum>=target){
                if(len>i+1-start) len = i+1-start;
                sum = sum-nums[start++];
            }
        }
        
        if(len == nums.length+1){
            return 0;
        }else{
            return len;
        }
    }
}
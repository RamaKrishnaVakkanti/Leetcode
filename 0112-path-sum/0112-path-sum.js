
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    console.log(root, targetSum);
    targetSum = targetSum-root.val;
    if(!root.left && !root.right && targetSum == 0) return true;
    
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     if(!root) return false;
    // const traverse=(root, sum=0) => {
    //     sum=sum+root.val;  
    //     if(sum==targetSum && root.left == null && root.right == null) return true;           
    //     return ((root.left !== null ? traverse(root.left, sum) : false)||(root.right !== null ? traverse(root.right, sum) : false));   
    // }
    // return traverse(root);
};
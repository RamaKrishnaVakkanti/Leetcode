
var hasPathSum = function(root, targetSum) {
        if(!root) return false;
    const traverse=(root, sum=0) => {
        sum=sum+root.val;  
        if(sum==targetSum && root.left == null && root.right == null) return true;           
        return ((root.left !== null ? traverse(root.left, sum) : false)||(root.right !== null ? traverse(root.right, sum) : false));   
    }
    return traverse(root);
};
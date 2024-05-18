/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
        if(!root) return false;
    const traverse=(root, sum=0) => {
        sum=sum+root.val;
        
        if(sum==targetSum && root.left == null && root.right == null){
            return true;
        }            
            return ((root.left !== null ? traverse(root.left, sum) : false)||(root.right !== null ? traverse(root.right, sum) : false))
           
    }
    return traverse(root) || false;
};
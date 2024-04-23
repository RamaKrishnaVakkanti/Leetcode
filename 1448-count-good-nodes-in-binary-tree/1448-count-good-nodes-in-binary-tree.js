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
 * @return {number}
 */
var goodNodes = function(root) {
    
    let output = 0;
    
    let DFS =(node, maxValue=-Infinity)=>{
        if(node){
            if(node.val>=maxValue) {
                console.log(node);
                output++;
                maxValue = node.val;
            }
            if(node.left) DFS(node.left, maxValue);
            if(node.right) DFS(node.right, maxValue);
            
        }
    }
    DFS(root);
    return output;
};
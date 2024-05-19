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
var countNodes = function(root) {
    let output=0;
    let traverse = (root)=>{
        if(root == null) return;
        else{
            output++;
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root);
    return output;
};
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root == null) return true;
    const mirror = (leftNode, rightNode)=>{
        if(leftNode == null && rightNode == null) return true;
        if(leftNode == null || rightNode == null) return false;
        return (leftNode.val == rightNode.val && mirror(leftNode.left, rightNode.right) && mirror(leftNode.right, rightNode.left));
    }
    return mirror(root.left, root.right);
};

  
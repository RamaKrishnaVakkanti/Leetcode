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
// var diameterOfBinaryTree = function(root) {
//     if(!root) return 0;
    
//     let traverse = (node, height)=>{
//         console.log(node);
//         if(!node) return height;
//         height++;
//         return Math.max(traverse(node.left, height), traverse(node.right,height));
//     }
//     let left = traverse(root.left,0);
//     let right = traverse(root.right,0);
//     console.log(left, right);
//     return (left+right);
// };
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    let traverse = (node) => {
        if (!node) return 0;

        let leftHeight = traverse(node.left);
        let rightHeight = traverse(node.right);

        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    };

    traverse(root);
    
    return maxDiameter;
};
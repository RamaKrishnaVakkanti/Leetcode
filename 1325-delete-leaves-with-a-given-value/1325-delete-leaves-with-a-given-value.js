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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    if (root.left) {
        root.left = removeLeafNodes(root.left, target);
    }
    if (root.right) {
        root.right = removeLeafNodes(root.right, target);
    }
    if (root.left === null && root.right === null && root.val === target) {
        return null;
    }
    return root;
}
// var removeLeafNodes = function(root, target) {
//     if(root.left) root.left = removeLeafNodes(root.left, target);
//     if(root.right) root.right = removeLeafNodes(root.right, target);
//     if(root.val == target) return null;
    
//     return root;
    
//     if(!root) return root;
//     let traverse=(arr)=>{
//         let root = arr.at(-1);
//         if(!root) return;
//         if(root.left && root.left.val == target && !root.left.left && !root.left.right){
//             root.left = null;
//             arr.pop();
//             traverse(arr);
//         }
//         if(root.right && root.right.val == target && !root.right.left && !root.right.right){
//             root.right = null;
//             arr.pop();
//             traverse(arr);
//         }
//         if(root.left) traverse([...arr, root.left]);
//         if(root.right) traverse([...arr, root.right]);
//     }
//     traverse([root]);
//     if(root.val == target && !root.left && !root.right) root = null;
//     return (root);
    
// };
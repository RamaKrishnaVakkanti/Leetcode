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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root==null || val==root.val) return root;
    if(val<root.val) return searchBST(root.left,val);
    if(val>root.val) return searchBST(root.right, val);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     let search = (node)=>{
//         if(node.val == val){
//             return node;
//         }
//         if(node.val>val) {
//             if(node.left) return search(node.left);
//             else return null;
//         }
//         else if(node.val<val){
//             if(node.right) return search(node.right);
//             else return null;
//         }
//     }
//      return search(root);
    
};
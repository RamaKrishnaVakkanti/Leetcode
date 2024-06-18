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
var findSecondMinimumValue = function(root) {
    let lowest = [Infinity, null];
    let secondLowest = [Infinity, null];
    
    let traverse=(root)=>{
        if(!root)return;
        
        if(root.val<lowest[0]) {
            secondLowest = [...lowest];
            lowest = [root.val, root];
        }else if(root.val<secondLowest[0] && root.val!==lowest[0]){
            secondLowest=[root.val, root];
        }
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return secondLowest[1] ? secondLowest[0] : -1;
};
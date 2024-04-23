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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    let output =[];
    let  DFS = (node, sum=0, path=[])=>{
        if(node) {
            path.push(node.val);
            if(!node.left && !node.right && sum+node.val-targetSum == 0) output.push([...path]);
            DFS(node.left,sum+node.val, [...path]);
            DFS(node.right,sum+node.val, [...path]);
        }
    }
    DFS(root);
    return output;
};
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if(!root) return [];
   let output = [];
   let queue = [root];
   while(queue.length){
       let length = queue.length;
       let newQueue = [];
       let currentLevel = [];
       for(let i=0;i<length;i++){
           let node = queue.shift();
           currentLevel.push(node.val);
           if(node.left) newQueue.push(node.left);
           if(node.right) newQueue.push(node.right);
       }
       queue = newQueue;
       output.push(currentLevel);
   }
   return output;

};
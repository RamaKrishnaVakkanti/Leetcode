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
var maxLevelSum = function(root) {
    
    let BFS=[root];
    let levelSum =[];
    while(BFS.length){
        let localBFS =[];
        let localSum = 0;
        for(let i=0;i<BFS.length;i++){
            let value = BFS[i];
            localSum = localSum+value.val;
            if(value.left) localBFS.push(value.left);
            if(value.right) localBFS.push(value.right);
        }
        levelSum.push(localSum);
        BFS=localBFS;
    }
    return levelSum.indexOf(Math.max(...levelSum))+1;
};
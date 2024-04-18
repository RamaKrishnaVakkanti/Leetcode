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
    let sum = -Infinity;
    let level = -1;
    let levelCount = 1;
    while(BFS.length){
        let localBFS =[];
        let length = BFS.length;
        let localSum = 0;
        for(let i=0;i<length;i++){
            let value = BFS.shift()
            localSum = localSum+value.val;
            if(value.left) localBFS.push(value.left);
            if(value.right) localBFS.push(value.right);
        }
        if(localSum>sum){
            sum =localSum;
            level = levelCount;
        }
        BFS=localBFS;
        levelCount++;
        console.log(localSum);
    }
    return level;
};
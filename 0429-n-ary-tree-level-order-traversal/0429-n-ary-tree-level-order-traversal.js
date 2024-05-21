/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let output=[];
    while(queue.length){
        let length = queue.length;
        let localQueue = [];
        let localOutput = [];
        for(let i=0;i<length;i++){
            let node = queue.shift();
            localOutput.push(node.val);
            if(node.children) localQueue.push(...node.children);
        }
        queue = localQueue;
        output.push(localOutput);
    }
    return output;
};
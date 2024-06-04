/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {   
    let output = [];
    if(!root) return [];
    let traverse = (root)=>{
        output.push(root.val);
        for(let node of root.children){
            traverse(node);
        }
    }
    traverse(root);
    return output;
    
};
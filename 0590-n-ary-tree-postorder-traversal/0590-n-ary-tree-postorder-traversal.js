/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let output =[];
    if(!root) return output;
    
    let traverse = (root)=>{
        for(let node of root.children){
            traverse(node);
        }
        output.push(root.val);
    }
    traverse(root);
    return output;
};
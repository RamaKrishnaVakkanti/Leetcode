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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    let traverse= (root)=>{
     if(!root) return;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);   
    }
    traverse(root);
    return root;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const arr = [root];
    // while(arr.length){
    //     let temp = arr.pop();
    //     if(temp){
    //         [temp.left, temp.right] = [temp.right, temp.left];
    //         arr.push(temp.left, temp.right);
    //     }
    // }
    // return root;
};
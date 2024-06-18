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
 * @return {boolean}
 */
var isValidBST = function(root) {

    if(!root) return true;
    let list= [];
    let count = -1;
    let valid = true;
    const traverse = root =>{
        if(!valid || !root){
            return;
        };
        traverse(root.left);       
        if(count>=0 && list[count]>=root.val){
            valid = false;
            return;
        }
        count++;
        list.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return valid;
    
    
    
    
    
    
    
    
    
    // if(list.length != [...new Set(list)].length) return false;
    // let beforeSort = list.join("");
    // list.sort((a,b) => a-b);
    // let afterSort = list.join("");
    // return beforeSort == afterSort;
};
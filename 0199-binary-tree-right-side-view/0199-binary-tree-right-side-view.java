/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        
        List<TreeNode> queue = new ArrayList<TreeNode>();
        queue.add(root);
        List<Integer> output = new ArrayList<Integer>();
        if(root == null) return output;
        while(queue.size()>0){
            int size = queue.size();
            List<TreeNode> innerQueue = new ArrayList<TreeNode>();
            output.add(queue.get(size-1).val);
            for(int i=0;i<size;i++){
                TreeNode local = queue.remove(0);
                if(local.left !=null) innerQueue.add(local.left);
                if(local.right != null) innerQueue.add(local.right);
            }
            queue.addAll(innerQueue);
        }
        return output;
    }
}
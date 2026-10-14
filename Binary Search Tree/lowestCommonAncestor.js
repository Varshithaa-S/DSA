/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {


    //top down
    let ans= null;
    let traversal = (curr) => {
        if(ans) return

        if(curr.val > p.val && curr.val > q.val) {
            curr.left && traversal(curr.left);
        } else if(curr.val < p.val && curr.val < q.val) {
            curr.right && traversal(curr.right);
        } else ans = curr
    }

    traversal(root);
    return ans;



    //bottom up
    //     if(curr.val > p.val && curr.val > q.val) {
    //     return lowestCommonAncestor(curr.left, p, q);
    // } else if(curr.val < p.val && curr.val < q.val) {
    //     return lowestCommonAncestor(curr.right, p, q);
    // } else return curr;
    
};
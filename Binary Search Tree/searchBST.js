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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // let ans = [];

    let traversal = (curr) => {
        if(!curr) return null
        if(curr.val == val) return curr
        if(curr.val > val) return traversal(curr.left);
        else  return traversal(curr.right)
        // return ans
    }
    return traversal(root);
    // console.log("ans", ans)
    // return ans? ans : null;
    
};
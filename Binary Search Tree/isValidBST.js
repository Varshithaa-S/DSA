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
var isValidBST = function(root, lo, hi) {

    //using pre-order-----------------
    // let ans = [];
    // let traversal = (curr) => {

    //     if(!curr) return;

    //     traversal(curr.left);
    //     ans.push(curr.val);
    //     traversal(curr.right);
    // }
    // traversal(root)
    
    // for(let i=1; i< ans.length; i++) {
    //     if(ans[i] <=ans[i-1]) return false;
    // }
    // return true


    // top-down--------------------
    // let ans = true;
    // let traversal = (curr, lo, hi) => {

    //     if(!(curr.val > lo && curr.val < hi)) ans = ans && false;

    //     curr.left && traversal(curr.left, lo , curr.val)
    //     curr.right && traversal(curr.right, curr.val, hi)

    // }
    // traversal(root, -Infinity, Infinity)
    // return ans


    //bottom-up---------------------
    if(!root) return true;

    if((lo != null && root.val <= lo) || (hi != null && root.val >= hi)) return false;

    let left = isValidBST(root.left, lo, root.val);
    let right = isValidBST(root.right, root.val, hi)

    return left && right

};
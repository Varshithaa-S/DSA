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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //top down
    // if(!root) return false;
    // let ans = false;
    // function calSum(curr, currSum) {
    //     let newSum = curr.val + currSum;

    //     if(!curr.left && !curr.right) {
    //         if(newSum == targetSum) ans = ans || true;
    //     }

    //     curr.left && calSum(curr.left, newSum);
    //     curr.right && calSum(curr.right, newSum)

    // }
    // calSum(root, 0);
    // return ans



    //bottom up->
    if(!root) return false;

    if(!root.left && !root.right) {
        return root.val == targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
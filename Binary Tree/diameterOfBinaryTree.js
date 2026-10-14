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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let sum = 0;
    let calculateDia = (curr) => {
        if(!curr) return 0;

        let l = calculateDia(curr.left);
        let r = calculateDia(curr.right);

        sum = Math.max(sum , l+r);
        return 1 + Math.max(l,r)
    }
    calculateDia(root);
    return sum
};
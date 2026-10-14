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
var goodNodes = function(root) {
    let c = 0;

    let traversal = (curr, max) => {
        if(curr.val >= max) {
            c++;
            max = curr.val
        }

        curr.left && traversal(curr.left, max);
        curr.right && traversal(curr.right, max)
    }
    traversal(root,  -Infinity);
    return c;
};
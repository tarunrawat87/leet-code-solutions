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
var isSymmetric = function (root) {

    let leftQ = [];
    let rightQ = [];

    leftQ.push(root.left);
    rightQ.push(root.right);
    Array.prototype.empty = function () {
        return this.length === 0
    }

    while (!(leftQ.empty() && rightQ.empty())) {

        let leftNode = leftQ.shift();
        let rightNode = rightQ.shift();

        if (leftNode && rightNode && leftNode.val != rightNode.val) return false;

        if((!(leftNode && rightNode)) && (leftNode != rightNode) ) return false;


        if (leftNode) {
            leftQ.push(leftNode.left);
            leftQ.push(leftNode.right);
        }

        if (rightNode) {
            rightQ.push(rightNode.right);
            rightQ.push(rightNode.left);
        }

    }
    if (!(leftQ.empty() || rightQ.empty())) {
        return false;
    }
    return true;

};
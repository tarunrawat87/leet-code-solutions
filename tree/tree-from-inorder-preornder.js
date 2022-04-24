/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */



var buildTree = function (preorder, inorder) {
    let root = null;
    // console.log('in',inorder);
    const indexOfRoot = inorder.indexOf(preorder[0]);
    const childs = populateChilds(inorder, indexOfRoot);
    //console.log(childs);
    root = createNode(preorder[0], childs.left, childs.right);
    //console.log(root);
    let index = 1;

    while (index < preorder.length) {
        build(root, preorder[index]);
        index++;
    }
    return root;
};

function build(node, val) {
    //  console.log(node,val);
    if (node.val == val) return;

    if (node.leftChilds && node.leftChilds.indexOf(val) > -1) {
        const index = node.leftChilds.indexOf(val);
        const childs = populateChilds(node.leftChilds, index);
        node.left = createNode(val, childs.left, childs.right);
        node.leftChilds = [];
        return;
    }
    if (node.rightChilds && node.rightChilds.indexOf(val) != -1) {
        const index = node.rightChilds.indexOf(val);
        const childs = populateChilds(node.rightChilds, index);
        node.right = createNode(val, childs.left, childs.right);
        node.rightChilds = [];
        return;
    }
    if (node.left)
        build(node.left, val);
    if (node.right)
        build(node.right, val);
}


function populateChilds(arr, index) {
    const leftChilds = index == 0 ? null : arr.slice(0, index);
    const rightChilds = (index == arr.length - 1) ? null : arr.slice(index + 1, arr.length);
    return {
        left: leftChilds,
        right: rightChilds
    }
}




function createNode(val, leftChilds = null, rightChilds = null) {
    const node = {};
    node.val = val;
    node.right = null;
    node.left = null;
    node.leftChilds = [];
    node.rightChilds = [];

    if (leftChilds == null) node.left = null;
    if (rightChilds == null) node.right = null;
    if (leftChilds && leftChilds.length == 1) node.left = createNode(leftChilds[0], null, null);
    if (rightChilds && rightChilds.length == 1) node.right = createNode(rightChilds[0], null, null);

    node.rightChilds = rightChilds === null || rightChilds.length == 1 ? [] : rightChilds;
    node.leftChilds = leftChilds === null || leftChilds.length == 1 ? [] : leftChilds;
    return node;
};



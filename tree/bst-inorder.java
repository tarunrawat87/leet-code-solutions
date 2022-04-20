//Question link : https://leetcode.com/problems/binary-tree-inorder-traversal

import java.util.*;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/*
Inoder for BST using Iterative method using Stack.
Inorder : L-R-R
*/
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorder = new ArrayList<Integer>();
        if (root == null)
            return inorder;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        TreeNode node;
        
        while (!stack.empty()) {

            node = stack.peek();
            //go to left till you find null,push the node to stack
            while (node != null) {
                node = node.left;
                if (node != null)
                    stack.push(node);
            }
            // keep popping and printing till you find a node who has right child.
            while (!stack.empty()) {
                node = stack.peek();
                stack.pop();
                inorder.add(node.val);
                if (node.right != null) {
                    stack.push(node.right);
                    break;
                }

            }

        }

        return inorder;
    }
}

//Question : https://leetcode.com/problems/same-tree/

import java.util.*;

/*
Idea is simple :
Just do inorder of both trees and compare every step
If at any step ,comparison fails then they are not same tree
*/

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

class Solution {
    // Compare two nodes completely
    public boolean compare(TreeNode left, TreeNode right) {

        if (left == null && right == null)
            return true;
        if (left == null && right != null)
            return false;
        if (right == null && left != null)
            return false;
        if (right.val != left.val)
            return false;
        if (right.right != null && left.right == null)
            return false;
        if (right.right == null && left.right != null)
            return false;
        if (right.left != null && left.left == null)
            return false;
        if (right.left == null && left.left != null)
            return false;

        return true;
    }

    public boolean isSameTree(TreeNode p, TreeNode q) {

        if (p == null && q == null)
            return true;

        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();
        stack1.push(p);
        stack2.push(q);
        //Do inoder
        while ((!stack1.empty()) && (!stack2.empty())) {

            TreeNode n1 = stack1.peek();
            TreeNode n2 = stack2.peek();
            if (!compare(n1, n2))
                return false;

            while (n1 != null && n2 != null) {
                n1 = n1.left;
                n2 = n2.left;
                if (!compare(n1, n2))
                    return false;
                if (n1 != null) {
                    System.out.println(n1 + " " + n2);
                    stack1.push(n1);
                    stack2.push(n2);
                }
            }

            while ((!stack1.empty()) && (!stack2.empty())) {
                TreeNode _n1 = stack1.peek();
                TreeNode _n2 = stack2.peek();
                stack1.pop();
                stack2.pop();
                if (!compare(_n1, _n2))
                    return false;
                if (_n1.right != null) {
                    stack1.push(_n1.right);
                    stack2.push(_n2.right);
                    break;
                }
            }

        }

        if (stack1.size() != stack2.size())
            return false;
        return true;
    }
}

 

import java.util.*;



/**
A Node class to represent a node
in a tree
*/
public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }
 
/*
Solution:

It is very simple , idea is to traverse the tree and subtract the required sum with given node and check if result is value of any element in the tree
if it is ,then we have found the pair 

Eg.

x+y=sum

Assuming x and y are values of two nodes,
y=sum-x or vice versa x=sum-y;

so if after subtracting given sum from current node value,if we find the node ,then node exists.

Question: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/submissions/

*/
class Solution {
    public boolean findTarget(TreeNode root, int k) {
        
        Queue<TreeNode> q=new LinkedList<TreeNode>();
        q.add(root);
        Set<Integer> set=new HashSet<Integer>();
        while(q.size()!=0){
        TreeNode node=q.remove();
        
        int diff=k-node.val;
        if(set.contains(node.val)==true)return true;
            else
        set.add(diff);  
            
        if(node.left!=null)q.add(node.left);
        if(node.right!=null)q.add(node.right);
            
            
        
        }
        
        
        
        return false;
    }
}

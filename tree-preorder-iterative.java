import java.util.*;
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
Creating a iterative solution using stack
*/
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> list=new ArrayList<>();      
        if(root==null)return list;
        Stack<TreeNode> stack=new Stack<TreeNode>();
        stack.push(root);    
        
        while(!stack.empty()){
            TreeNode t=stack.peek();
            list.add(t.val);
            //check stack and print element first
            if(t.left!=null)stack.push(t.left);//if left of node is null ,go there (push it to stack)
            else{
                 //if left of node is null,then we need to pop stack till we get a element 
                 //whose right element is not null
                //once we found it push it to stack
                while(!stack.empty()){
                    t=stack.peek();
                    stack.pop();
                    if(t.right!=null){
                        stack.push(t.right);
                        break;
                    }    
                }
                
                
            }
                
            
            
        }
        
        
        return list;
        
    }
}

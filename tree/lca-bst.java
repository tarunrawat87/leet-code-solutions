import java.util.*;

//Definition for a binary tree node.
 public class TreeNode {
    int val;
    TreeNode left;
     TreeNode right;
     TreeNode(int x) { val = x; }
 }

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
      
        ArrayList<Integer> path1=getPathFromRoot(root,p);
        ArrayList<Integer> path2=getPathFromRoot(root,q);
        
        int size1=path1.size();
        int size2=path2.size();
        /*
        Compare two arraylist till you find a divergent,
        last same path value is LCA
        */
        int index1=0,index2=0;
        boolean found=false;
        if(path1.size()==0||path2.size()==0)return null;
        int lastVal=-1;
        System.out.println("sizes "+path1.size()+" "+path2.size());
        while(size1>index1&&size2>index2){
        if(path1.get(index1).equals(path2.get(index2))){
            lastVal=path1.get(index1);
            found=true;
        }else break;
        
        
        index1++;
        index2++;    
        }
        
        
        
        return found?new TreeNode(lastVal):null; 
    }
    
    public void print(ArrayList<Integer> path){
        path.forEach(a->System.out.println(a));
        System.out.println("**");
    }
    /*
    Search for the element from root 
    and create a path,store that path in array
    
    */
    public ArrayList<Integer> getPathFromRoot(TreeNode root,TreeNode node){
        
        ArrayList<Integer> list=new ArrayList<Integer>();
       
        while(root!=null){
             list.add(root.val);
            if(root.val==node.val){
               
                return list;
            }
           
            if(root.val>node.val)root=root.left;
            else
              root=root.right;
            }
        
        return null;
    }
    
    
}

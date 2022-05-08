/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
// LeetCode : https://leetcode.com/problems/merge-two-sorted-lists
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        
        ListNode fakeNode = new ListNode(-1);
        
        ListNode tempHead = fakeNode;
        
        while(list1!=null&&list2!=null){
            
            if(list1.val>=list2.val){
                tempHead.next = list2;
                list2 = list2.next;
                
            }else{
                 tempHead.next = list1;
                list1 = list1.next;
            }
             tempHead = tempHead.next;
        }
        
        while(list1!=null){
            tempHead.next = list1;
            list1= list1.next;
            tempHead = tempHead.next;
        }
        
        while(list2!=null){
            tempHead.next = list2;
            list2= list2.next;
            tempHead = tempHead.next;
        }
        
        return fakeNode.next;
    }   
}

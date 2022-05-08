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
// Leet Code question link : https://leetcode.com/problems/middle-of-the-linked-list/
class Solution {
    public ListNode middleNode(ListNode head) {
        
    if(head==null||head.next==null)return head;
        
        ListNode slow,fast;
        slow=head;
        fast=head;
        while(fast!=null&&fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
            
        }
    
        
    return slow;
    }
}

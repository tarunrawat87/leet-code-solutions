/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let firstEnd = null,
    rearEnd = null;
  let curr = head;
  let index = 1;
  let prev = null,
    next = null;
  while (curr !== null) {
    
    if (index === left) {
    

      while (curr !== null && index <= right) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        index++;
      }
    }

    if(left === 1){
        head.next = next;
        head = prev;
        return head;
    }

   // console.log(index,right)
    if (index >= right) {
     //   console.log(firstEnd.val)
      firstEnd.next.next = next;
      firstEnd.next = prev;   
      break;
    }
    firstEnd = curr;
    index++;
    curr = curr.next;
  }
  return head;
};

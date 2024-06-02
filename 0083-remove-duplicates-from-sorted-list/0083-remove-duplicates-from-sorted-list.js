/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let arr = [];

    let first = head;
    // first.next = head;    
    while(first){
        if(first.next && first.val == first.next.val){
            first.next=first.next.next;
        }else{
            first = first.next;
        }
    }
    return head;
};
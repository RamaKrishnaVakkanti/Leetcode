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
var deleteMiddle = function(head) {
    if(head == null) return head;
    let nodes = [];
    let iterate = head;
    while(iterate){
        nodes.push(iterate);
        iterate = iterate.next;
    }
    if(nodes.length<=1) return null;
    let middle = Math.floor(nodes.length/2)-1;
    nodes[middle].next = nodes[middle].next ?nodes[middle+1].next: null;
    return head;
};
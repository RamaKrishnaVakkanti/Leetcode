/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // console.log(lists)
    const newList=[];
    for(let i=0;i<lists.length;i++){
        lists[i] && newList.push(lists[i]);
    }
    lists=[...newList];
    
    let firstList = [...lists];
    let output = new ListNode(0);
    let head= output;
    while(lists.length){
        let shortest=0;
        for(let i=0;i<lists.length;i++){
            if(lists[i].val<lists[shortest].val) shortest=i;
        }
        head.next=new ListNode(lists[shortest].val);
        head = head.next;
    if(lists[shortest].next) lists[shortest]=lists[shortest].next;
    else lists.splice(shortest,1);
    }
    console.log(lists,output);
    return output.next;
};
"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(5);
const b = new ListNode(1);
const c = new ListNode(5);

a.next = b;
b.next = c;

/**
 * solution 1 -- Set cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */
function removeDuplicates(head) {
    const startingNode = head;
    let seenValues = new Set();
    let previousNode = new ListNode();

    while (head !== null) {
        const currentValue = head.val;
        // check if value has been seen before, delete this node
        if (seenValues.has(currentValue)) {
            // skip current node in chain to implicitly delete
            previousNode.next = head.next;
        } else {
            // otherwise, add this value to the Set
            seenValues.add(currentValue);
            // record as previous node for next iteration
            previousNode = head;
        }

        // move pointer to next node
        head = head.next;
    }

    return startingNode;
}

console.log(a); // 5 -> 1 -> 5
console.log( removeDuplicates(a) ); // 5 -> 1 -> null
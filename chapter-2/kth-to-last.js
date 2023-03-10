"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(5);
const b = new ListNode(1);
const c = new ListNode(8);
const d = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode|null}
 */
function kthToLast(head, k) {
    let pointer1 = head;
    let pointer2 = head;

    // move pointer1 k nodes into the list
    for (let i = 0; i < k; i++) {
        if (pointer1 === null) return null; // out of bounds

        pointer1 = pointer1.next;
    }

    // move them both at the same pace
    // when pointer1 hits the end, pointer2 will be at the right elem
    while (pointer1 !== null) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer2;
}

console.log( kthToLast(a, 1) ); // node with val of 3
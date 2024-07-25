// add two linked lists

class Node {
    constructor(val = 0) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addAtEnd(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    printList() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.val);
        current = current.next;
      }
      console.log(result.join(' -> '));
    }
  
    static addTwoNumbers(l1, l2) {
      let dummyHead = new Node(0);
      let current = dummyHead;
      let carry = 0;
  
      while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;
  
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
      }
  
      if (carry > 0) {
        current.next = new Node(carry);
      }
  
      return dummyHead.next;
    }
  }
  
  const list1 = new LinkedList();
  list1.addAtEnd(2);
  list1.addAtEnd(4);
  list1.addAtEnd(3);
  
  const list2 = new LinkedList();
  list2.addAtEnd(5);
  list2.addAtEnd(6);
  list2.addAtEnd(4);
  
  console.log("List 1:");
  list1.printList();
  
  console.log("List 2:");
  list2.printList();
  
  const resultHead = LinkedList.addTwoNumbers(list1.head, list2.head);
  const resultList = new LinkedList();
  resultList.head = resultHead;
  
  console.log("Result:");
  resultList.printList();
// Find the middle node of the linked list

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    findMiddle() {
      if (!this.head) {
        return null;
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      return slow.data;
    }
  
    
    insertAtEnd(data) {
      const newNode = new Node(data);
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
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  
  const list = new LinkedList();
  list.insertAtEnd(1);
  list.insertAtEnd(2);
  list.insertAtEnd(3);
  list.insertAtEnd(4);
  list.insertAtEnd(5);
  
  console.log("List:");
  list.printList();
  
  const middleNode = list.findMiddle();
  console.log("Middle node:", middleNode);
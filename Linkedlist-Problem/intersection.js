// Find the intersection node of two linked lists

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
  
    static findIntersection(list1, list2) {
      if (!list1.head || !list2.head) {
        return null;
      }
  
      let len1 = LinkedList.getLength(list1);
      let len2 = LinkedList.getLength(list2);
  
      let diff = Math.abs(len1 - len2);
      let ptr1 = list1.head;
      let ptr2 = list2.head;

      if (len1 > len2) {
        ptr1 = LinkedList.advancePointer(ptr1, diff);
      } else {
        ptr2 = LinkedList.advancePointer(ptr2, diff);
      }
  
      while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
      return ptr1;
    }
  
    static getLength(list) {
      let length = 0;
      let current = list.head;
      while (current) {
        length++;
        current = current.next;
      }
      return length;
    }
  
    static advancePointer(node, steps) {
      while (steps > 0 && node) {
        node = node.next;
        steps--;
      }
      return node;
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
  }

  const list1 = new LinkedList();
  const list2 = new LinkedList();
  
  list1.insertAtEnd(1);
  list1.insertAtEnd(2);
  list1.insertAtEnd(3);
  list1.insertAtEnd(4);
  list1.insertAtEnd(5);
  list1.insertAtEnd(6);
  
  list2.insertAtEnd(9);
  list2.insertAtEnd(10);
  list2.head.next.next = list1.head.next.next.next; 
  
  const intersectionNode = LinkedList.findIntersection(list1, list2);
  
  if (intersectionNode) {
    console.log("Intersection found at node with data:", intersectionNode.data);
  } else {
    console.log("No intersection found");
  }
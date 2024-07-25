// Check whether a given linked list is palindrome or not

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
  
    isPalindrome() {
      if (!this.head || !this.head.next) {
        return true; 
      }
  
      let slow = this.head;
      let fast = this.head;
      while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      let secondHalf = this.reverseList(slow.next);
      
      let firstHalf = this.head;
      while (secondHalf) {
        if (firstHalf.data !== secondHalf.data) {
          return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
      }
  
      return true;
    }
  
    reverseList(head) {
      let prev = null;
      let current = head;
      let next = null;
  
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      return prev;
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
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(' -> '));
    }
  }
  
  const list1 = new LinkedList();
  list1.insertAtEnd(1);
  list1.insertAtEnd(2);
  list1.insertAtEnd(3);
  list1.insertAtEnd(2);
  list1.insertAtEnd(1);
  
  console.log("List 1:");
  list1.printList();
  console.log("Is palindrome:", list1.isPalindrome());
  
  const list2 = new LinkedList();
  list2.insertAtEnd(1);
  list2.insertAtEnd(2);
  list2.insertAtEnd(3);
  list2.insertAtEnd(4);
  
  console.log("\nList 2:");
  list2.printList();
  console.log("Is palindrome:", list2.isPalindrome());
// import { SinglyLinkedList_Node as Node } from "./nodes";
const { SinglyLinkedList_Node: Node } = require("./nodes");

module.exports.SinglyLinkedList = class {
  constructor(items = []) {
    Array.isArray(items)
      ? items.forEach((value) => this.append(value))
      : this.append(items);
  }
  //getters
  get head() {
    return this.#head;
  }
  get tail() {
    return this.#tail;
  }

  //setters
  set head(value) {
    this.#head = value;
  }
  set tail(value) {
    this.#tail = value;
  }

  //methods
  //adding
  //adds to the front of the list
  push(value) {
    this.head = new Node(value, this.head);
    if (this.head.next) this.head.next.previous = this.head;
    if (!this.tail) this.tail = this.head;
  }

  append(value) {
    if (!this.tail) return this.push(value);
    let tmp = new Node(value, null, this.tail);
    this.tail.next = tmp;
    this.tail = tmp;
  }

  //removing
  pop() {
    if (!this.head) return null;
    const { value } = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }

    return value;
  }
  removeLast() {
    if (!this.tail) return null;
    const { value } = this.tail;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    return value;
  }

  print() {
    if (this.#head) this.#head.__rec_print();
    else process.stdout.write("empty list\n");
  }

  //private fields
  #head;
  #tail;
};

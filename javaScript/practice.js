class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }

  get value() {
    return this.#value;
  }
  get next() {
    return this.#next;
  }
  set value(value) {
    this.#value = value;
  }
  set next(value) {
    this.#next = value;
  }

  toString() {
    return `{value: ${this.value}, next:${
      this.next ? `NODE<${this.next.value.toString()}>` : null
    }}`;
  }

  #value;
  #next;
}

class Stack {
  constructor(values = []) {
    values.forEach((value) => this.push(value));
  }
  get top() {
    return this.#top;
  }
  set top(value) {
    this.#top = value;
  }

  push(value) {
    const temp = new Node(value);
    if (!this.top) {
      this.top = temp;
    } else this.top = insert(this.top, value);
    return this;
  }

  pop() {
    if (!this.top) return null;
    const { value } = this.top;
    this.top = this.top.next;
    return value;
  }

  toString() {
    let str = "\tTOP\n";
    let current = this.top;
    while (current) {
      str += `\t${current.value}\n`;
      current = current.next;
    }
    str += "\tBOT";
    return str;
  }
  #top;
}

const insert = (head_ptr, value) => {
  if (!head_ptr) return null;
  let temp = new Node(value);
  temp.next = head_ptr;
  return temp;
};

const append = (head_ptr, value) => {
  if (!head_ptr) return null;
  let temp = new Node(value);
  let current = head_ptr;
  while (current.next) {
    current = current.next;
  }
  current.next = temp;
  return head_ptr;
};

const deleteNode = (head_prt, node_prt) => {
  if (!node_prt) return null;
  if (node_prt === head_prt) {
    head_prt = head_prt.next;
    return head_prt;
  }

  let current = head_prt;
  while (current) {
    if (current.next == node_prt) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
  // if (current && current.next === node_prt) {
  //   current.next = current.next.next;
  // }
  return head_prt;
};

const print_list = (list_ptr) => {
  while (list_ptr) {
    console.log(list_ptr.value);
    list_ptr = list_ptr.next;
  }
};

// Given a singly linked list, devise a time and space efficient algorithm to find the mth-to-last element of the list.
// Implement your algorithm, taking care to handle relevant error conditions. Define mth to last such that when m = 0
// the last element of the list is returned.
const mthToLast = (head, mth) => {
  const stack = new Stack();
  while (head) {
    stack.push(head);
    head = head.next;
  }
  for (let i = 0; i < mth; i++) {
    stack.pop();
  }
  return stack.pop();
}; // not a good solution becuase as the input grows so does the space i need to store the elements

const mthToLast_02 = (head, mth) => {
  let behind = head,
    current = behind;

  for (let i = 0; i < mth; i++) {
    if (!current) return false;
    current = current.next;
  }

  while (current && current.next) {
    behind = behind.next;
    current = current.next;
  }
  return behind;
};

// MAKING THE LIST
const head = new Node(1);
let current = head;
for (let i = 2; i < 12; i++) {
  current.next = new Node(i);
  current = current.next;
}
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 ->  10 -> 11
console.log(`${mthToLast_02(head, 1)}`);
// print_list(head);

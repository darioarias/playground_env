module.exports.SinglyLinkedList_Node = class {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }

  // getters
  get value() {
    return this.#value;
  }
  get next() {
    return this.#next;
  }
  get previous() {
    return this.#previous;
  }

  //getters
  set value(value) {
    this.#value = value;
  }
  set next(value) {
    this.#next = value;
  }
  set previous(value) {
    this.#previous = value;
  }

  //methods
  toString() {
    return `{ value: ${this.value}, next: ${
      this.next ? this.next.value : "null"
    } }`;
  }

  __rec_print() {
    process.stdout.write(`${this.toString()}${this.next ? " <-> " : "\n"}`);
    if (this.next) this.next.__rec_print(true);
  }

  //privates fields
  #value;
  #next;
  #previous;
  #stringyfy(argue) {}
};

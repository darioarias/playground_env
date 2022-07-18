class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  get value() {
    return this.#value;
  }
  set value(value) {
    this.#value = value;
  }
  get left() {
    return this.#left;
  }
  set left(value) {
    this.#left = value;
  }
  get right() {
    return this.#right;
  }
  set right(value) {
    this.#right = value;
  }

  toString() {
    return `{value:${this.value ? `${this.value}` : null}, left:${
      this.left ? `NODE<${this.left.value.toString()}>` : null
    }, right:${this.right ? `NODE<${this.right.value.toString()}>` : null}}`;
  }

  #value;
  #left;
  #right;
}

class BinarySearchTree {
  constructor(items = []) {
    items.forEach((value) => this.insert(value));
  }
  get root() {
    return this.#root;
  }
  set root(value) {
    this.#root = value;
  }

  insert(value) {
    const helper = (root, value) => {
      if (!root) return new Node(value);
      if (value > root.value) {
        root.right = helper(root.right, value);
      } else root.left = helper(root.left, value);
      return root;
    };

    this.root = helper(this.root, value);
  }

  find(value) {
    const helper = (head, value) => {
      if (!head) return null;
      if (value === head.value) return head;
      if (value > head.value) return helper(head.right, value);
      else return helper(head.left, value);
    };

    return helper(this.root, value);
  }

  toString() {
    const diagram = (node, top = "", root = "", bottom = "") => {
      if (!node) return root + "null\n";
      if (!node.left && !node.right) {
        return root + `${node.value}\n`;
      }
      return (
        diagram(node.right, top + "  ", top + "┌─", top + "│ ") +
        root +
        `${node.value}\n` +
        diagram(node.left, bottom + "│ ", bottom + "└─", bottom + "  ")
      );
    };
    return diagram(this.root);
  }

  #root;
}

// bst.root = new Node(5);

const bst = new BinarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]);
console.log(bst.toString());
// console.log(`${n}`);

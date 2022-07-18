const { BinarySearchTreeNode: Node } = require("../shared/Nodes");

class BinarySearchTree {
  constructor(items = []) {
    this.root = null;
    for (let item of items) this.insert(item);
  }
  /**
   * Access the root of the tree
   * @returns {*} reference to the root
   */
  get root() {
    return this.#root;
  }

  /**
   * @param {Node} value refernece to the root of the node
   */
  set root(value) {
    this.#root = value;
  }
  /**
   * Inserts a value in the tree
   * @param {*} value value to be inserted
   */
  insert(value) {
    const helper = (root, value) => {
      if (!root) return new Node(value);
      if (value < root.value) root.left = helper(root.left, value);
      else root.right = helper(root.right, value);
      return root;
    };
    this.root = helper(this.root, value);
  }
  /**
   * Searches the tree using BFS to see if value is in the tree
   * @param {*} value
   * @returns
   */
  has(value) {
    const queue = [this.root];
    while (queue.length) {
      const { value: val, left, right } = queue.shift();
      if (val === value) return true;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    return false;
  }

  /**
   * searches for a value in the tree and deletes it if found
   * @param {*} value
   */
  delete(value) {
    const helper = (root, value) => {
      if (!root) return null;
      if (root.value === value) {
        const { left, right } = root;
        if (!left && !right) return null;
        if (!left) return right;
        if (!right) return left;

        root.value = right.min.value;
        root.right = helper(right, root.value);
      } else if (value < root.value) {
        root.left = helper(root.left, value);
      } else root.right = helper(root.right, value);

      return root;
    };
    this.root = helper(this.root, value);
  }

  closeAncestor(NodeA, NodeB) {
    /**
     * check if a subtree has both, nodeA and nodeB
     * @param {Node} root
     * @param {*} A
     * @param {*} B
     * @returns {Boolean}
     */
    const hasBoth = (root, val_a, val_b, visited) => {
      if (!root) return false;
      if (visited["root"]) return true;
      const notFound = new Set([`${val_a}`, `${val_b}`]);
      const queue = [root];
      while (queue.length) {
        const { value, left, right } = queue.shift();
        if (notFound.has(`${value}`)) notFound.delete(`${value}`);
        if (notFound.size == 0) {
          visited[root.value] = true;
          return true;
        }
        if (left) queue.push(left);
        if (right) queue.push(right);
      }
      return false;
    };

    let ancestor = this.root;
    let visited = {};
    while (true) {
      if (hasBoth(ancestor.left, NodeA, NodeB, visited)) {
        ancestor = ancestor.left;
      } else if (hasBoth(ancestor.right, NodeA, NodeB, visited)) {
        ancestor = ancestor.right;
      } else break;
    }
    console.log(`closest: ${ancestor.toString()}`);
  }

  /**
   * Creates a string representation of the tree
   * @returns {String} tree in string format
   */
  toString() {
    const translate = (node, top = "", root = "", bottom = "") => {
      if (!node) return root + "null\n";
      if (!node.left && !node.right) {
        return root + `${node.value}\n`;
      }
      return (
        translate(node.right, top + "  ", top + "┌─", top + "│ ") +
        root +
        `${node.value}\n` +
        translate(node.left, bottom + "│ ", bottom + "└─", bottom + "  ")
      );
    };

    return translate(this.root);
  }
  #root;
}

module.exports = { BinarySearchTree };

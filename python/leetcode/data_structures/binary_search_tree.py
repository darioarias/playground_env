from __future__ import annotations

from typing import Callable, Generic, Iterable, Optional, Union

from .nodes import BinarySearchTreeNode as Node
from .protocols import CT


class BinarySearchTree(Generic[CT]):
    def __init__(self, __items: Optional[Iterable[CT]] = None) -> None:
        self.root: Optional[Node[CT]] = None

        if __items is not None:
            self.root = self.from_iter(__items).root
            return None

    def insert(self, value: CT) -> None:
        """Inserts a value into the tree"""

        def insert_helper(root: Optional[Node[CT]], value: CT) -> Node[CT]:
            if root is None:
                return Node[CT](value)
            if value < root:
                root.left = insert_helper(root.left, value)
            else:
                root.right = insert_helper(root.right, value)
            return root

        self.root = insert_helper(self.root, value)

    def remove(self, value: CT) -> None:
        """Removes a given value from the tree"""

        def remove_helper(root: Optional[Node[CT]], value: CT) -> Optional[Node[CT]]:
            if root is None:
                return None

            if root == value:
                if root.left is None and root.right is None:
                    return None
                if root.left is None:
                    return root.right
                if root.right is None:
                    return root.left
                root.value = root.right.min.value
                root.right = remove_helper(root.right, root.value)
            elif value < root:
                root.left = remove_helper(root.left, value)
            else:
                root.right = remove_helper(root.right, value)
            return root

        self.root = remove_helper(self.root, value)

    def __contains__(self, item: CT) -> bool:
        def contains(root: Optional[Node[CT]], value: CT) -> bool:
            if root is None:
                return False
            if root.value == value:
                return True
            if root < value:
                return contains(root.right, value)
            else:
                return contains(root.left, value)

        return contains(self.root, item)

    def __str__(self) -> str:
        def diagram(
            node: Optional[Node[CT]], top: str = "", root: str = "", bottom: str = ""
        ) -> str:
            """This algorithm is based on an implementation by Károly Lőrentey in his book [Optimizing Collections](https://www.objc.io/books/optimizing-collections/)"""
            if node is None:
                return root + "None\n"
            if node.left is None and node.right is None:
                return root + f"{node.value!r}\n"
            return (
                diagram(node.right, top + "  ", top + "┌─", top + "│ ")
                + root
                + f"{node.value!r}\n"
                + diagram(node.left, bottom + "│ ", bottom + "└─", bottom + "  ")
            )

        return diagram(self.root)


__all__ = ["BinarySearchTree"]

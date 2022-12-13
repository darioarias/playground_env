from __future__ import annotations

from typing import Any, Callable, Generic, Iterable, Optional

from .nodes import AVLTreeNode as Node
from .protocols import CT


class AVL(Generic[CT]):
    def __init__(self, __items: Optional[Iterable[CT]] = None) -> None:
        self.root: Optional[Node[CT]] = None

        if __items is not None:
            self.root = self.from_iter(__items).root

    @staticmethod
    def from_list(items: list[CT]) -> AVL:
        """Takes a list and tries to map the value on to a tree.
        Note that the tree may rotate and hinder the list order."""

        left_child: Callable[[int], int] = lambda index: 2 * index + 1
        right_child: Callable[[int], int] = lambda index: 2 * index + 2

        def populate_tree(items: list[CT], index: int, tree: AVL[CT]) -> None:
            if index >= len(items) or items[index] is None:
                return None

            tree.insert(items[index])
            populate_tree(items, left_child(index), tree)
            populate_tree(items, right_child(index), tree)

        _avl = AVL[CT]()
        populate_tree(items, 0, _avl)
        return _avl

    @staticmethod
    def from_iter(items: Iterable[CT]) -> AVL:
        _temp_avl = AVL()
        for item in items:
            _temp_avl.insert(item)
        return _temp_avl

    def insert(self, value: CT) -> None:
        def insert_helper(node: Optional[Node[CT]], value: CT) -> Node[CT]:
            if node is None:
                return Node(value)

            if value < node:
                node.left = insert_helper(node.left, value)
            else:
                node.right = insert_helper(node.right, value)

            balanced = self._balanced(node)
            balanced.height = max(balanced.left_height, balanced.right_height) + 1
            return balanced

        self.root = insert_helper(self.root, value)

    def remove(self, value: CT) -> None:
        def remove_helper(node: Optional[Node[CT]], value: Any) -> Optional[Node[CT]]:
            if node is None:
                return None

            if value == node:
                if node.left is None and node.right is None:
                    return None
                if node.right is None:
                    return node.left
                if node.left is None:
                    return node.right
                node.value = node.right.min.value
                node.right = remove_helper(node.right, node.value)
            elif value < node:
                node.left = remove_helper(node.left, value)
            else:
                node.right = remove_helper(node.right, value)

            balanced = self._balanced(node)
            balanced.height = max(balanced.left_height, balanced.right_height) + 1
            return balanced

        self.root = remove_helper(self.root, value)

    def _left_rotate(self, node: Node[CT]) -> Node[CT]:
        assert isinstance(node.right, Node)

        pivot = node.right
        node.right = pivot.left
        pivot.left = node
        node.height = max(node.left_height, node.right_height) + 1
        pivot.height = max(pivot.left_height, pivot.right_height) + 1

        return pivot

    def _right_rotate(self, node: Node[CT]) -> Node[CT]:
        assert isinstance(node.left, Node)

        pivot = node.left
        node.left = pivot.right
        pivot.right = node
        node.height = max(node.left_height, node.right_height) + 1
        pivot.height = max(pivot.left_height, pivot.right_height) + 1

        return pivot

    def _right_left_rotate(self, node: Node[CT]) -> Node[CT]:
        if node.right is None:
            return node
        node.right = self._right_rotate(node.right)
        return self._left_rotate(node)

    def _left_right_rotate(self, node: Node[CT]) -> Node[CT]:
        if node.left is None:
            return node
        node.left = self._left_rotate(node.left)
        return self._right_rotate(node)

    def _balanced(self, node: Node[CT]) -> Node[CT]:
        match node.balance_factor:
            case 2:
                if node.left is None or node.left.balance_factor != -1:
                    return self._right_rotate(node)
                return self._left_right_rotate(node)
            case -2:
                if node.right is None or node.right.balance_factor != 1:
                    return self._left_rotate(node)
                return self._right_left_rotate(node)
            case _:
                return node

    def __str__(self) -> str:
        def diagram(
            node: Optional[Node[CT]], top: str = "", root: str = "", bottom: str = ""
        ) -> str:
            """This algorithm is based on an implementation by Károly Lőrentey in his book [Optimizing Collections](https://www.objc.io/books/optimizing-collections/)"""
            if node is None:
                return root + "None\n"
            if node.left is None and node.right is None:
                return root + f"{node.value}\n"
            return (
                diagram(node.right, top + "  ", top + "┌─", top + "│ ")
                + root
                + f"{node.value}\n"
                + diagram(node.left, bottom + "│ ", bottom + "└─", bottom + "  ")
            )

        return diagram(self.root)

    def __contains__(self, __item: CT) -> bool:
        def contains(root: Optional[Node[CT]], value: CT) -> bool:
            if root is None:
                return False

            if value == root:
                return True
            if value < root:
                return contains(root.left, value)
            else:
                return contains(root.right, value)

        return contains(self.root, __item)


__all__ = ["AVL"]

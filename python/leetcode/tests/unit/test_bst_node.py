import operator
import unittest

from data_structures.nodes import BinarySearchTreeNode as Node


class TestBSTNode(unittest.TestCase):
    def setUp(self) -> None:
        self.one = 1
        self.two = 2
        self.three = 3

        self.n_one = Node(self.one)
        self.n_two = Node(self.two)
        self.n_three = Node(self.three)

        self.n_two.left = self.n_one
        self.n_two.right = self.n_three

    def tearDown(self) -> None:
        del self.one
        del self.two
        del self.three

        del self.n_one
        del self.n_two
        del self.n_three

    def test_properties(self) -> None:
        """makes sure that all set and default values are set correctly"""
        # Getters
        value: int = 10
        node: Node[int] = Node(value)

        self.assertEqual(node.val, value)
        self.assertEqual(node.value, value)

        self.assertIs(node.left, None)
        self.assertIs(node.right, None)

        self.assertIsInstance(node.val, int)

        value2: int = 5
        node2: Node[int] = Node(value2)

        value3: int = 15
        node3: Node[int] = Node(value3)

        node.left = node2
        self.assertFalse(node.left is None)
        self.assertIs(node.left, node2)

        node.right = node3
        self.assertFalse(node.right is None)
        self.assertIs(node.right, node3)

        self.assertIs(node.min, node2)

        self.assertRaises(AttributeError, setattr, node, "min", Node(0))

        # setters
        temp_node = Node(20)
        self.assertEqual(temp_node.val, 20)

        temp_node.val = 10

        self.assertNotEqual(temp_node.val, 20)
        self.assertEqual(temp_node.val, 10)

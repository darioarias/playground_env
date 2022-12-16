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

    def test_operators(self) -> None:
        one, two, three = self.one, self.two, self.three
        n_one, n_two, n_three = self.n_one, self.n_two, self.n_three

        self.assertLess(n_two, n_three)  # lt operator btw Node and Node
        self.assertFalse(n_three < n_two)  # lt operator btw Node and Node
        self.assertGreater(n_two, n_one)  # gt operator btw Node and Node
        self.assertFalse(n_one > n_two)  # gt operator btw Node and Node
        self.assertEqual(n_two, n_two)  # eq opeartor btw Node and Node
        self.assertNotEqual(n_two, n_one)  # eq operator btw Node and Node

        self.assertEqual(n_one, one)  # eq btw Node[int], int
        self.assertFalse(n_one == two)  # eq btw Node[int], int
        self.assertLess(n_two, three)  # lt btw Node[int], int
        self.assertFalse(n_two < one)  # lt btw Node[int], int
        self.assertGreater(n_two, one)  # gt btw Node[int], int
        self.assertFalse(n_two > three)  # gt btw Node[int], int

        self.assertIs(n_two.left, n_one)  # testing the 'is' operator
        self.assertIs(n_two.right, n_three)  # testing the 'is' operator

        n_str: Node[str] = Node("1")
        self.assertRaises(TypeError, operator.lt, n_str, n_one)
        self.assertRaises(TypeError, operator.gt, n_str, n_one)

    def test_iter(self) -> None:
        """Test to make sure iter dunder works as expected"""
        one, two, three = self.one, self.two, self.three
        n_one, n_two, n_three = self.n_one, self.n_two, self.n_three
        """
        found in self.n_two
            2
        1       3
        """

        val, left, right = n_two
        assert isinstance(left, Node)
        assert isinstance(right, Node)

        self.assertEqual(val, two)
        self.assertEqual(left.val, one)
        self.assertEqual(right.val, three)

        self.assertIs(left, n_one)
        self.assertIs(right, n_three)

        empty_node = Node(0)
        val, left, right = empty_node

        self.assertIsInstance(val, int)
        self.assertIs(left, None)
        self.assertIs(right, None)

    # TODO: test repr and str - first update cls to support str

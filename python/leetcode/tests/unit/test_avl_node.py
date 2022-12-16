import operator
import unittest

from data_structures.nodes import AVLTreeNode as Node


class TestAVLNode(unittest.TestCase):
    def setUp(self) -> None:
        self.vals = (2, 1, 3)

        two, one, three = self.vals
        self.nodes = (Node(two), Node(one), Node(three))

    def tearDown(self) -> None:
        del self.vals
        del self.nodes

    def test_properties(self) -> None:
        n_two, n_one, n_three = self.nodes
        two, *_ = self.vals

        self.assertEqual(n_two.value, two)
        n_two.value = 20
        self.assertEqual(n_two.value, 20)
        # TODO: overwrite n_two.val and test it

        self.assertIs(n_two.left, None)
        self.assertIs(n_two.right, None)
        self.assertEqual(n_two.height, 0)

        self.assertIs(n_two.min, n_two)
        self.assertEqual(n_two.left_height, -1)
        self.assertEqual(n_two.right_height, -1)
        self.assertEqual(n_two.balance_factor, 0)

        n_two.left = n_one
        self.assertIs(n_two.left, n_one)
        self.assertIs(n_two.min, n_one)
        self.assertEqual(n_two.balance_factor, 1)
        self.assertEqual(n_two.left_height, 0)
        self.assertEqual(n_two.right_height, -1)

        n_two.right = n_three
        self.assertIs(n_two.right, n_three)
        self.assertIs(n_two.min, n_one)
        self.assertEqual(n_two.balance_factor, 0)
        self.assertEqual(n_two.right_height, 0)

        # props integrity
        self.assertRaises(AttributeError, setattr, n_two, "min", Node(10))
        self.assertRaises(AttributeError, setattr, n_two, "right_height", 1)
        self.assertRaises(AttributeError, setattr, n_two, "left_height", 0)
        self.assertRaises(AttributeError, setattr, n_two, "balance_factor", -1)

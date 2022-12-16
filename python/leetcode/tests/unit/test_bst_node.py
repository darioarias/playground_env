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

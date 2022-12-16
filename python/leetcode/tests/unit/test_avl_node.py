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

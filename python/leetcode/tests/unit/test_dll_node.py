import unittest

from data_structures.nodes import DoublyLinkedListNode as Node


class TestBSTNode(unittest.TestCase):
    def setUp(self) -> None:
        self.vals = (1, 2, 3)
        self.nodes = (Node(val) for val in self.vals)

    def tearDown(self) -> None:
        del self.vals
        del self.nodes

    def test_properties(self) -> None:
        n_one, n_two, *_ = self.nodes
        one, *_ = self.vals

        self.assertEqual(n_one.value, one)
        self.assertEqual(n_one.val, one)

        self.assertIs(n_one.previous, None)
        self.assertIs(n_one.prev, None)
        self.assertIs(n_one.next, None)

        n_one.next = n_two

        self.assertIs(n_one.next, n_two)
        n_two.previous = n_one

        self.assertIs(n_two.previous, n_one)
        self.assertEqual(n_two.prev, n_two.previous)

        n_two.prev = None
        self.assertIs(n_two.prev, None)
        self.assertEqual(n_two.prev, n_two.previous)

        n_one.next = None
        self.assertIs(n_one.next, None)

    def test_operators(self) -> None:
        n_one, *_ = self.nodes
        one, two, *_ = self.vals

        self.assertEqual(n_one, one)
        self.assertEqual(n_one, Node(one))

        self.assertNotEqual(n_one, two)
        self.assertNotEqual(n_one, Node(two))

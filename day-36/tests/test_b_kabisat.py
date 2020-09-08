import unittest
import sys,os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from b_kabisat import isLeap

class isLeapTest(unittest.TestCase):
    def test_1900(self):
        self.assertEqual(isLeap(1900), "Bukan kabisat")

    def test_2000(self):
        self.assertEqual(isLeap(2000), "Kabisat")

    def test_2001(self):
        self.assertEqual(isLeap(2001), "Bukan kabisat")
    
    def test_negatif(self):
        self.assertFalse(isLeap(-3))

    def test_str(self):
        self.assertFalse(isLeap('string'))

if __name__ == '__main__':
    unittest.main()
import unittest
import sys
sys.path.append('../src')

from a_count import countString

class countStringTest(unittest.TestCase):
    def test_dimar(self):
        self.assertEqual(countString('dimar'), 5)

    def test_hanung(self):
        self.assertEqual(countString('hanung'), 6)
    
    def test_not_str(self):
        self.assertFalse(countString([1,2,3]))

if __name__ == '__main__':
    unittest.main()
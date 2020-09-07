import unittest
import sys
sys.path.append('../src')

from f_mode import Mode

class ModeTest(unittest.TestCase):
    def test_5(self):
        self.assertEqual(Mode([1,2,3,4,5,6,6,8,8,6,9]), 6)

    def test_88_5(self):
        self.assertEqual(Mode([87.5, 88.5, 60.5, 90.5, 88.5]), 88.5)
    
    def test_str(self):
        self.assertFalse(Mode('array'))

if __name__ == '__main__':
    unittest.main()
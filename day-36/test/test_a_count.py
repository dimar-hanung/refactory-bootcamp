import unittest
import sys
sys.path.append('../src')

from a_count import countString

class countStringTest(unittest.TestCase):
    def test_dimar(self):
        self.assertEqual(countString('dimar'), 5, msg="dimar seharusnya 5 huruf")

    def test_hanung(self):
        self.assertEqual(countString('hanung'), 6, msg="hanung seharusnya 6 huruf")
    
    def test_not_str(self):
        self.assertFalse(countString([1,2,3]) or countString(1) or countString({"s"}),msg="selain string seharusnya false")

if __name__ == '__main__':
    unittest.main()
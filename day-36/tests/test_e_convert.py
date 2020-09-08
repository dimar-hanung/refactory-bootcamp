import unittest
import sys,os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from e_convert import num2word

class Num2WordTest(unittest.TestCase):
    def test_15(self):
        self.assertEqual(num2word(1001),"Seribu Satu")

    def test_32(self):
        self.assertEqual(num2word(29), "Dua Puluh Sembilan")
    
    def test_str(self):
        self.assertFalse(num2word('string'))

if __name__ == '__main__':
    unittest.main()
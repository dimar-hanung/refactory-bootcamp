import unittest
import sys
sys.path.append('../src')

from c_rating import rating

class ratingTest(unittest.TestCase):
    def test_13(self):
        self.assertEqual(rating(13), "REMAJA",msg="13 untuk remaja")

    def test_21(self):
        self.assertEqual(rating(21), "DEWASA",msg="21 untuk dewasa")
    
    def test_9(self):
        self.assertEqual(rating(9), "BIMBINGAN ORANG TUA",msg="9 butuh bimbingan")
    
    def test_8(self):
        self.assertEqual(rating(8), "SEMUA USIA")

    def test_500(self):
        self.assertRaises(ValueError,rating,1000)

    def test_str(self):
        self.assertFalse(rating('string'))

if __name__ == '__main__':
    unittest.main()
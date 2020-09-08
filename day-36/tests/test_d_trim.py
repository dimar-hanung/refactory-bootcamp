import unittest
import sys,os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from d_trim import Trim

class FilmTrimTest(unittest.TestCase):
    def test_15(self):
        self.assertEqual(Trim("Ini adalah kalimat",2,"..."), "Ini adalah...")

    def test_32(self):
        self.assertEqual(Trim("Ini adalah kalimat Panjang",2,"..."), "Ini adalah...")
    
    def test_str(self):
        self.assertEqual(Trim('satu',1),"Minimal 2")

if __name__ == '__main__':
    unittest.main()
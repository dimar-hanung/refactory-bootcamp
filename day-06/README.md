# Command Line Interface (CLI) - Caporal
## A. File
- 01.js - String Transformation
- 02.js - Arithmetic
- 03.js - Palindrome
- 04.js - Obfuscator
- 05.js - Random String
    1. ex   : > ```.\05.js random --numbers=false --lowercase --panjang=100```
    2. note : karena tidak bisa menggunakan length sebagai opsion, length diganti --panjang
- 06.js - Get IP Address in private network
- 07.js - Get External IP Address
- 08.js - Get headlines from https://www.kompas.com/
    1. Package : 
         1.  axios      => fetch data
         2.  cheerio    => parse ke html
- 09.js - Import/Export CSV/XLS/XLSX file.
    1. ex       : ```convert dataexcel.xlsx dataexcel.csv```
    2. Package : xlsx


## B. Note for Me
Dalam menggunakan option default, harus menyertakan argument deskripsi, karena default berada di argument 3
```js
option(nama opsi , deskripsi, { /*disini letak opsi default*/ })
```

## comingsoon description
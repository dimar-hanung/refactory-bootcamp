# Python VENV
## Main Task
- [x] `01-Mode.py` Mencari frequensi tertinggi dari list
- [x] `02-num2word.py` Mengubah angka menjadi huruf terbilang
- [x] `03-trim.py` Membatasi jumlah maksimal huruf
- [x] `04-querying-json.py` Mengolah Response http request json
- [x] `05-combine.py` Relasi Json http-request
- [x] `06-fetch.py` Scraping data headline dari kompas.com

## Memakai VENV
- Install VENV

    Python 3 :
    ```
    pip3 install virtualenv
    ```
    Python 2 :

    ```
    pip install virtualenv
    ```
- Membuat VENV
    ```
    python -m venv <myenvname> 
    ```
- Masuk ke VENV
    ```
    <myenvname>\Scripts\activate
    ```
    Intinya kalau mau masuk ke venv kita langsung saja tuliskan dari path saat ini menuju activate, contoh 
    ```
    project\.venv\Scripts\activate
    ```
## Membuat requrements.txt
1. Masuk VENV
2. Setelah itu tuliskan
    ```
    pip3 freeze > requirements.txt
    ```


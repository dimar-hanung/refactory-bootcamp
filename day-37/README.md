# Python

## before deadline
https://github.com/dimar-hanung/refactory-bootcamp/tree/9d277851cadfcee62796653f2c4df74f26915e67/day-37
## Main Task
- [x] `01_string.py` transform string
- [x] `02_reduce.py` aritmatika dalam list
- [x] `03_statistic.py` mean, median, mode, fmean
- [x] `04_palindrome.py` cek jika huruf merupakan palindrome
- [x] `05_obfuscator.py` men obfuscated ke char code
- [x] `06_random.py` random string dengan option
- [x] `07_ip.py` mendapatkan ip private
- [x] `08_ip_exs.py` mendapatkan ip external
- [x] `09_input.py` unlimited prompt
- [ ] `10_crud.py` crud json
    - [x] create
    - [x] read
    - [x] read by id
    - [ ] update
    - [x] delete

## Click Cheat Sheets
- Click Unlimited Arguments ( `nargs= -1` )
    ```py
    @click.argument("number",type=click.INT,nargs= -1)
    ```
- Click options dengan default
    ```py
    @click.option('--gender', default=False, help='STRING | Data gender')
    ```
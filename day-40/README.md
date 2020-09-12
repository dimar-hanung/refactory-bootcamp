# Shell Script Basic
2020-09-12 10:17:41
## Before Deadline
Not Yet
## Main Task
- [x] `01-text-length.sh` 
- [x] `02-response.sh`
- [x] `03-save.sh` 
- [x] `04-install-node.sh`
## Problem
- [x] `03-save.sh` Bash pada windows bermasalah, file tidak ter create dengan baik \
    solved : 2020-09-12 13:31:23
    ### Sebab  :
    Terdapat invalid character carriage return (^M) pada setiap baris url,\
    ^M biasanya terlihat saat file copy dari windows
    ### Solusi :
    Install dos2unix pada WSL

## SH dan Bash?
Fungsi nya sih untuk menjalankan perintah command line linux secara berantai, biar lebih mudah, nanti keliatan ketika kalau mau deploy project besar / install, kan butuh banyak perintah sekaligus, nah bisa pakai sh, jadi di sh ini bisa menjalankan file python gitu misal
### SH 
SH (Bourne **sh**ell) adalah shell command-line interpreter untuk os berbasis UNIX sperti linux, dan merupakan bahasa pemrograman, kegunaan secara umum adalah untuk menjalankan beberapa perintah shell command-line sekaligus

### BASH
BASH (**B**ourne **a**gain **sh**ell) adalah superset dari sh, atau bisa kita bilang tambahan dari sh, dan BASH ini memiliki/support semua fitur yang dimiliki sh \
untuk perbedaan lebih detail bisa dilihat di https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash

## Shell Script Cheat Sheet
- Komentar
    ```sh
    # Komentar dalam sh menggunakan tanda pagar
    ```
- Variable \
    Penting, space sangat berpengaruh variable tidak boleh ada space di antara " = ",`name = dimar` adalah contoh yang salah, akan menampilkan error
    ```sh
    # Seperti python tanpa perlu mendeklarasikan

    name=dimar
    echo $name
    # output :  dimar

    echo name
    # output : name

    echo my name $name
    # output : my name dimar
    ```
untuk lengkap nya ada di https://devhints.io/bash/


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


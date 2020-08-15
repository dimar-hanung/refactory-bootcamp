# Git dan Github
## Task
Mentor Membentuk kelompok dengan masing masing kelompok berisikan 2 anggota, masing masing kelompok melakukan simulasi team work dengan GitHub, contoh simulasi yang dilakukan antara lain, membuat konflik dan meresolve konflik tersebut

Target dari task ini sendiri adalah menunjukan contributor pada repository team


## Materi - Git dan GitHub
git biasanya sudah terinstall otomatis di linux, tapi apabila anda menggunakan windows anda bisa mendownload software seperti git bash, cari saja di google

### Perbedaan Git dan Github
Jangan salah sangka, Git itu tidak sama dengan GitHub,
lalu bedanya Git dengan GitHub ?

- **Git** Merupakan version control system, maksdunya Git ini kegunaan nya untuk control versi dari project/code yang kita buat, Git akan mentracking semua perubahaan pada code kita yang kita kenal dengan istilah Commit

- **GitHub** Merupakan Layanan hosting (cloud-based hosting service) untuk repository Git, Jadi mereka bukan hal yang sama: Git adalah alat , GitHub adalah layanan untuk proyek yang menggunakan Git . Contoh lain dari GitHub adalah GitLab

### Git CLI Vs Git Gui
Saya menyarankan menggunakan Git Cli sebagai awal mula belajar Git, menurut saya menggunakan Git Gui hanya akan membingungkan cara kerja git itu sendiri, selain itu bekerja menggunakan Git Cli akan jauh lebih cepat dibanding menggunakan Gui, fitur Cli juga lebih lengkap menurut saya

### GIt Status
Git memiliki 3 status
1. Modified : Modified adalah kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di version control.
1. Staged : Staged adalah kondisi dimana revisi sudah ditandai, tetapi belum disimpan di version control. 
1. Commited : Commited adalah kondisi dimana revisi sudah disimpan di version control.

### Syntax / Perintah Git
1. `git init` untuk inisialisasi awal git
1. `git clone` untuk cloining repository dari github ke hardisk komputer kita\
    ketika kita cloning kita sudah mendapatkan folder .git yang berisi data remote dll\
    jadi contohnya apabila kita clone repository kita sendiri, kita tidak perlu melakukan inisialisai git lagi karena sudah terhubung.
1. `git commit` untuk Melakukan commit atau bahasa gampang nya, melakukan update ke repository github kita, ketika melakukan commit perubahan belum terkirim ke repository, untuk mengirim nya kita melakukan `git push`
1. `git push` mengirim perubahan ke repository kita, jadi sebelum push kita melakukan commit dulu 
1. `git status` untuk melihat status file pada lokal kita 

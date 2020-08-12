# Libur - Coba Main Redis Ah
## Sekilas Tentang Redis
1. NoSQL Database
1. Open source dengan BSD License
1. ditulis dengan bahasa C
1. Kepanjangan Redis -> REmote DIctionary Server
1. Database untuk caching. Data nya di simpan di memory, bukan di hardisk. Makanya jauh lebih cepat dr database biasa. Data bakal di write ke hardisk ketika service Di matikan.

## Windows, VirtualBox + Linux + Docker + Redis
### Kenapa?
- Karena Redis pada officialnya tidak support windows, \
- Terus kenapa Docker nya aja di install diwindows, kan docker ada official nya untuk windows \
ada tapi **Beratttt**

### Persiapan
1. Download dan install virtual box | [Link 1 (103 MB)](https://www.virtualbox.org/wiki/Downloads)
1. Download Iso Linux, [Debian Minimal](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/)
1. Install linux diVirtualBox
1. Install Docker di linux

### Install Redis Pada Docker
1. Masukan Perintah
    ```docker
    docker run -d \
    -h redis \
    -e REDIS_PASSWORD=password_kamu_bebas \
    -v redis-data:/data \
    -p 6379:6379 \
    --name redis \
    --restart always \
    redis:5.0.5-alpine3.9 /bin/sh -c 'redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}'
    ```
    - `-d` = Detach , Menjalankan container di background, lalu print id container, karena di background proses install lebih cepat (log tidak ditampilkan)
    - `-h` = hostname, Memberi nama hostname pada container
    - `-e` = Enviroment, Memasukan env, disitu saya memasukan env password untuk redis
    - `-v` = Belum gitu paham wkwk
    - `-p` = port forward
    - `--name` = Memberi nama container
    - `--restart always` = kayaknya bakal nyala kalo debian habis di matiin
    - baris terakhir itu menjalankan perintah dari OS alpine nya
    
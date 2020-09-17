# Docker Compose

Karena ukuran images yang besar disarankan uji coba di https://labs.play-with-docker.com/

## Problem 
- [x] Error Run docker-compose pada docker playground
    ```
    If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
    ```
    ### Solution
    Buat ulang instance

- [ ] docker-compose tidak bisa dijalankan hanya 1 kali, harus 2 sampai 4 kali, karena menunggu mysql nya jalan dulu,
    ### Solution
    https://stackoverflow.com/questions/42567475/docker-compose-check-if-mysql-connection-is-ready \
    tapi masih tidak bisa karena sudah deprecated di versi 3+ \
    bisa menggunakan cara kedua yaitu db migrate dibuat manual \
    jadi pada `docker-compose.yml` hapus code dibawah ini (line 20)
    ```yml
    command: bash -c "npx sequelize-cli db:migrate"
    ```
    lalu setelah `docker-compose up -d` masuk exec ke container backend nya
    ```bash
    docker container exec -it bash
    ```
    setelah masuk ke bash nya bisa jalankan migrate
    ```bash
    npx sequelize-cli db:migrate
    ```

    

## Run Docker Compose 2 sampai 4x
```bash
docker-compose up -d
```

- `-d ` diatas artinya daemon, yaitu berati berjalan di background jadi logs tidak akan tampil, coba saja experiment tanpa `-d` perbedaan nya akan terlihat jelas
## Explain
Kenapa 2 kali compose up?\
karena waktu compose yang pertama mysql belum jalan\
jadi ketika si backend 2 ini melakukan migrate maka hasilnya refused\
Lalu kenapa yang untuk keduakalinya bisa\
karena si mysql udah jalan waktu run pertama tadi\
jadi sekarang sudah bisa connect
# Docker Compose

Karena ukuran images yang besar disarankan uji coba di https://labs.play-with-docker.com/

## Run Docker Compose 2x
```bash
docker-compose up -d
```

## Explain
Kenapa 2 kali compose up?\
karena waktu compose yang pertama mysql belum jalan\
jadi ketika si backend 2 ini melakukan migrate maka hasilnya refused\
Lalu kenapa yang untuk keduakalinya bisa\
karena si mysql udah jalan waktu run pertama tadi\
jadi sekarang sudah bisa connect